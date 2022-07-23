import React, { useState } from "react";
import {
  Container,
  Box,
  styled,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import Header from "./Header";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadedStatus } from "../../store/global";
import Animation from "./animation/Animation";
import AA from "../../static/background-mobile-phones.png";
import styles from "styled-components";
import MobileHeader from "./MobileHeader";
import CircularMenu from "./CircularMenu";
import { isModalState } from "../../store/form";

interface LayoutProps {
  children: React.ReactNode;
}

const sidebarWidth = 240;

const MobileLayout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(true);
  const [sign, setSign] = useState(true);

  const [isModal, setIsModal] = useRecoilState(isModalState);
  const loading = useRecoilValue(loadedStatus);

  const md = useMediaQuery("(max-width:900px)");

  const handleDrawerOpen = () => {
    setOpen(true);
    setSign(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setSign(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#f6f6f6",
      }}
    >
      <Header
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        menuWidth={sidebarWidth}
        open={open}
        md={md}
        sign={`${sign}`}
      />

      <Main open={open} md={md}>
        <Animation />

        <StyledWrapper maxWidth="xl">
          <CircularMenu />
          {md && (
            <MobileInnerWrapper>
              <MobileHeader />
              <Box
                sx={{
                  backgroundColor: "#fff",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                {children}
              </Box>
            </MobileInnerWrapper>
          )}
          {/* {sign && (
            <button
              onClick={() => setOpen((state) => !state)}
              style={{ position: "fixed" }}
            >
              버튼
            </button>
          )} */}
          {!md && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <MobileWrapper>
                <InnerWrapper>
                  <MobileHeader />
                  <MobileContent isModal={isModal}>{children}</MobileContent>
                </InnerWrapper>
              </MobileWrapper>
            </Box>
          )}
        </StyledWrapper>
      </Main>
      {loading && (
        <StyledSpinner>
          <CircularProgress />
        </StyledSpinner>
      )}
    </Box>
  );
};

export default MobileLayout;

const StyledWrapper: any = styled(Container, {
  shouldForwardProp: (prop) => prop !== "md",
})<{
  md?: boolean;
}>(({ theme, md }) => ({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: 1,
}));

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "md",
})<{
  open?: boolean;
  md?: boolean;
}>(({ theme, open, md }) => ({
  flexGrow: 1,
  width: "100%",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: md ? 0 : `-${sidebarWidth}px`,
}));

const StyledSpinner = styled(Box)({
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1201,
  width: "100%",
  height: "100vh",
  background: "#00000040",
});

const MobileWrapper = styles.div`
  position: relative;
  width: 100%;
  max-width: 25rem;
  height: 75vh;
  margin: 0 auto;
  background: #fff;
  padding: 70px 18px 50px;
  border: 10px solid #cecece;
  border-radius: 30px;
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #cecece;
    border-radius: 10px;
  }
  &:after {
    content: '';
    display: block;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    background: #fff;
    border: 3px solid #cecece;
    border-radius: 50%;
  }
`;

const InnerWrapper = styles.div`
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 90%;
  border: 1px solid #8c8c8c;
`;

const MobileInnerWrapper = styles.div`
  overflow-y: auto;
  position: relative;
  height: 100%;
  background-color: #fff;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`;

const MobileContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isModal",
})<{
  isModal?: boolean;
}>(({ isModal }) => ({
  overflow: isModal ? "hidden" : "auto",
  paddingInline: 15,
  paddingTop: 10,
  paddingBottom: 50,
}));
