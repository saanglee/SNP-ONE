import styled from "styled-components";
import "./dashboard.css";
const ListHeader = () => {
  return (
    <div className="ListHeader">
      <header>
        AI학습용 교통 데이터 수집을 위한 <br /> 크라우드 워커 지원 현황
      </header>
      <button>엑셀 다운로드</button>
    </div>
  );
};
// test
export default ListHeader;
