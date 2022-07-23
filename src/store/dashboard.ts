import { atom, selector } from "recoil";
import { Applicant, FilterDashboardApplicantData } from "../types/dashboard";
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

    // TODO: 사용자 이름의 일부만 일치해도 보여줄 수 있게끔 수정
    const filterByName = ({ name }: Applicant) => name === filterState.name;

    const filterByCheck = ({ isChecked }: Applicant) =>
      isChecked === filterState.isChecked;

    const filterByRecruitment = ({
      DateOfApplication: applicantDate,
    }: Applicant) => {
      const { recruitment } = filterState;
      // TODO: 특정날짜 DATE 생성
      //       - recuitment가 1이면 특정날짜보다 이후에 지원한 지원자들만 filter
      //       - recuitment가 2면 특정날짜보다 이전에 지원한 지원자들만 filter
    };

    // TODO: 현재 dummy의 date로는 작동 X -> 수정 필요
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
