import { atom, selector } from "recoil";
import {
  Applicant,
  FilteredApplicants,
  ApplicantList,
} from "../types/datshboard";

export const listOnTargetPage = atom({
  key: "listForExcelDownload",
  default: [] as Applicant[],
});

export const applicantAllData = atom({
  key: "applicantAllData",
  default: [] as ApplicantList,
});

export const filteredApplicantState = atom({
  key: "filteredApplicantState",
  default: {
    name: "",
    sort: "asc",
    recruitment: "1",
    isChecked: "all",
  } as FilteredApplicants,
});

export const filteredApplicantData = selector({
  key: "filteredApplicantData",
  get: ({ get }) => {
    const applicantData = get(applicantAllData);
    const filterState = get(filteredApplicantState);
    console.log(filterState);

    const filterByName = ({ name }: Applicant) =>
      name.includes(filterState.name);

    const filterByRecruitment = ({ date }: Applicant) => {
      const { recruitment } = filterState;

      const applicantDate = new Date(date).getTime();
      // TODO: 특정날짜를 어느 날짜로 할지 정하기
      const referenceDate = new Date("2022.05.02").getTime();
      const timeDifference = applicantDate - referenceDate;

      if (recruitment === "1") {
        return timeDifference > 0;
      }
      return timeDifference <= 0;
    };

    const sortByDate = (
      { date: prevDate }: Applicant,
      { date: currDate }: Applicant,
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

    if (filterState.isChecked === "all") {
      return filteredApplicantList;
    }

    return filteredApplicantList.filter(({ isChecked }: Applicant) => {
      if (filterState.isChecked === "checked") {
        return isChecked;
      }
      return !isChecked;
    });
  },
});
