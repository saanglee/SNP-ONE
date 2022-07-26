interface Applicant {
  id: string;
  date: string | number;
  name: string;
  gender: "femail" | "male";
  birth: string | number;
  phone: string | number;
  email: string;
  transportation: string;
  address: string;
  isChecked: boolean;
}

type ApplicantList = Applicant[];

interface FilteredApplicants {
  name: string;
  sort: "asc" | "desc";
  recruitment: "1" | "2";
  isChecked: string;
}

export { Applicant, ApplicantList, FilteredApplicants };
