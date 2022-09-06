import { Applicant, Applicants } from '../../types/dashboard';

const ExcelDownloadBtn = ({
  applicantsList,
}: {
  applicantsList: Applicants;
}) => {
  return (
    <button onClick={() => exportToCsv(applicantsList)}>CSV 다운로드</button>
  );
};

export default ExcelDownloadBtn;

interface DownloadFile {
  data: string;
  fileName: string;
  fileType: 'text/csv;charset=utf-8';
}

const downloadFile = ({ data, fileName, fileType }: DownloadFile) => {
  const blob = new Blob(['\ufeff' + data], { type: fileType });

  const a = document.createElement('a');
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  a.dispatchEvent(clickEvt);
  a.remove();
};

const exportToCsv = (applicantsList: Applicants) => {
  const headers = [
    'date,Name,Gender,birth,Phone,Email,transportation,Address,isChecked',
  ];

  const applicantsListCsv = applicantsList
    .map((item) => {
      return item;
    })
    .reduce((acc: string[], applicant: Applicant) => {
      const {
        date,
        name,
        gender,
        birth,
        phone,
        email,
        transportation,
        address,
        isChecked,
      } = applicant;

      acc.push(
        [
          date,
          name,
          gender,
          birth,
          phone,
          email,
          transportation,
          address,
          isChecked,
        ].join(','),
      );
      return acc;
    }, []);

  downloadFile({
    data: [...headers, ...applicantsListCsv].join('\n'),
    fileName: 'applicantsList.csv',
    fileType: 'text/csv;charset=utf-8',
  });
};
