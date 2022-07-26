import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { listOnTargetPage } from "../../store/dashboard";
import "./dashboard.css";
import ExcelDownloadBtn from "./ExcelDownloadBtn";

const ListHeader = () => {
  const applicantsList = useRecoilValue(listOnTargetPage);
  console.log(applicantsList);
  return (
    <div className="ListHeader">
      <header>
        AI학습용 교통 데이터 수집을 위한 <br /> 크라우드 워커 지원 현황
      </header>
      <ExcelDownloadBtn applicantsList={applicantsList} />
    </div>
  );
};

export default ListHeader;
