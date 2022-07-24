import { Applicant } from "../../types/datshboard";
import dummy from "./dummy.json";

const ExcelDownloadBtn = () => {
  return <button>엑셀 다운로드</button>;
};

export default ExcelDownloadBtn;

interface DownloadFile {
  data: string;
  fileName: string;
  fileType: "text/csv;charset=utf-8";
}

const downloadFile = ({ data, fileName, fileType }: DownloadFile) => {
  const blob = new Blob([data], { type: fileType });

  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  a.dispatchEvent(clickEvt);
  a.remove();
};

const exportToCsv = (applicants: Applicant[]) => {
  const headers = [
    "DateOfApplication,Name,Gender,DateOfBirth,Phone,Email,transportation,Address,isChecked",
  ];

  // TODO: applicants.reduce로 수정
  const applicantsCsv = dummy.reduce((acc: string[], applicant: Applicant) => {
    const {
      DateOfApplication,
      name,
      gender,
      DateOfBirth,
      phone,
      email,
      transportation,
      address,
      isChecked,
    } = applicant;

    acc.push(
      [
        DateOfApplication,
        name,
        gender,
        DateOfBirth,
        phone,
        email,
        transportation,
        address,
        isChecked,
      ].join(","),
    );
    return acc;
  }, []);

  downloadFile({
    data: [...headers, ...applicantsCsv].join("\n"),
    fileName: "applicants.csv",
    fileType: "text/csv;charset=utf-8",
  });
};
