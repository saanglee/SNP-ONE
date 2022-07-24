import { atom, selector } from "recoil";
import { Applicant, FilterDashboardApplicantData } from "../types/datshboard";
import { axiosInstance } from "../api/instance/instance";

// TODO: get 메소드를 api 파일로 분리
// TODO: filteredApplicantData 작업 마친 후 export 제거
export const applicantAllData = atom({
  key: "applicantAllData",
  default: selector({
    key: "applicantUpdateData",
    get: async () => (await axiosInstance.get<Applicant[]>("/user")).data,
  }),
});

const filteredApplicantState = atom({
  key: "filteredApplicantState",
  default: {
    name: "",
    sort: "asc",
    address: "전국",
    recruitment: 1,
    isChecked: true,
  } as FilterDashboardApplicantData,
});

export const filteredApplicantData = selector({
  key: "filteredApplicantData",
  get: ({ get }) => {
    const applicantData = get(applicantAllData);
    const filterState = get(filteredApplicantState);

    const filterByName = ({ name }: Applicant) =>
      name.includes(filterState.name);

    const filterByCheck = ({ isChecked }: Applicant) =>
      isChecked === filterState.isChecked;

    const filterByRecruitment = ({ DateOfApplication }: Applicant) => {
      const { recruitment } = filterState;

      const applicantDate = new Date(DateOfApplication).getTime();
      // TODO: 특정날짜를 어느 날짜로 할지 정하기
      const referenceDate = new Date().getTime();
      const timeDifference = applicantDate - referenceDate;

      if (recruitment === 1) {
        return timeDifference > 0;
      }
      return timeDifference <= 0;
    };

    const sortByDate = (
      { DateOfApplication: prevDate }: Applicant,
      { DateOfApplication: currDate }: Applicant,
    ) => {
      const { sort } = filterState;
      const prevDateTime = new Date(prevDate).getTime();
      const currDateTime = new Date(currDate).getTime();

      if (sort === "asc") {
        return currDateTime - prevDateTime;
      }
      return prevDateTime - currDateTime;
    };

    const filteredApplicantList = applicantData
      .filter(filterByName)
      .filter(filterByRecruitment)
      .filter(filterByCheck)
      .sort(sortByDate);

    if (filterState.address === "전국") {
      return filteredApplicantList;
    }

    return filteredApplicantList.filter(
      ({ address }: Applicant) => address === filterState.address,
    );
  },
});
