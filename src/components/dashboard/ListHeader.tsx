import "./dashboard.css";
import ExcelDownloadBtn from "./ExcelDownloadBtn";

const ListHeader = ({ items }: any) => {
  return (
    <div className="ListHeader">
      <header>
        AI학습용 교통 데이터 수집을 위한 <br /> 크라우드 워커 지원 현황
      </header>
      <ExcelDownloadBtn applicantsList={items} />
    </div>
  );
};

export default ListHeader;
