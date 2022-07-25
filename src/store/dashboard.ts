import { atom, selector } from "recoil";
import { Applicant, FilteredApplicants } from "../types/datshboard";
import { getApplicantData } from "../api/models/dashboard";

export const applicantAllData = atom({
  key: "applicantAllData",
  default: selector({
    key: "applicantUpdateData",
    get: getApplicantData,
  }),
});

const filteredApplicantState = atom({
  key: "filteredApplicantState",
  default: {
    name: "",
    sort: "asc",
    recruitment: 1,
    isChecked: "전체",
  } as FilteredApplicants,
});

export const filteredApplicantData = selector({
  key: "filteredApplicantData",
  get: ({ get }) => {
    const applicantData = get(applicantAllData);
    const filterState = get(filteredApplicantState);

    const filterByName = ({ name }: Applicant) =>
      name.includes(filterState.name);

    const filterByRecruitment = ({ DateOfApplication }: Applicant) => {
      const { recruitment } = filterState;

      const applicantDate = new Date(DateOfApplication).getTime();
      // TODO: 특정날짜를 어느 날짜로 할지 정하기
      const referenceDate = new Date("2022.05.02").getTime();
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
      .sort(sortByDate);

    if (filterState.isChecked === "전체") {
      return filteredApplicantList;
    }

    return filteredApplicantList.filter(({ isChecked }: Applicant) => {
      if (filterState.isChecked === "당첨") {
        return isChecked;
      }
      return !isChecked;
    });
  },
});
