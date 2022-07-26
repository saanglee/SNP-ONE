import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadedStatus, openStatus } from "../../store/global";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [open, setOpen] = useRecoilState(openStatus);
  //   console.log(open);
  return (
    <>
      <FlexBox>
        <Link to="/sign">
          <MobileButton onClick={() => setOpen(true)}>지원하기</MobileButton>
        </Link>
        <Link to="/dash">
          <DashButton>관리자페이지 가기</DashButton>
        </Link>
      </FlexBox>
    </>
  );
};

export default LandingPage;

const FlexBox = styled.div`
  position: fixed;
  top: 50%;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 3rem;
`;

const MobileButton = styled.button`
  display: flex;
`;

const DashButton = styled.button`
  display: flex;
`;
