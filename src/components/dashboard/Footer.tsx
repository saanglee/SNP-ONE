import styled from "styled-components";

// 작업 중

const prev = "<";
const next = ">";
const pages: string[] = ["1", "2", "3"];

const pageButtons = pages.map((page, index) => {
  if (pages.length > 3) {
    return <button key={index}>{page}</button>; // TODO: 페이지 3개 이상일 경우 로직 생각해보기
  }
  return <button key={index}>{page}</button>;
});

const Footer = () => {
  return (
    <FooterContainer>
      <NumberOfItems> 1-4 of 4 </NumberOfItems>
      <PageButtonWrapper>
        <PageButton> {prev} </PageButton>
        {pageButtons}
        <PageButton> {next} </PageButton>
      </PageButtonWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #eff3ff;
  color: #0f2c6e;
  height: 50px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
`;

const NumberOfItems = styled.div``;

const PageButtonWrapper = styled.div`
  border: 1px solid red;
`;
const PageButton = styled.button`
  margin-right: 10px;
`;
