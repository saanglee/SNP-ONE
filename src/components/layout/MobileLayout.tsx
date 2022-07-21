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
interface LayoutProps {
  children: React.ReactNode;
}

const sidebarWidth = 240;

const MobileLayout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(true);
  const [sign, setSign] = useState(true);

  // const [loading, setLoading] = useRecoilState(loadedStatus);
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
          {md && <>{children}</>}
          {sign && (
            <button
              onClick={() => setOpen((state) => !state)}
              style={{ position: "fixed" }}
            >
              버튼
            </button>
          )}
          {!md && (
            <ContentWrapper>
              <InnerWrapper>{children}</InnerWrapper>
            </ContentWrapper>
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
  position: "relative",
  // overflowY: "scroll",
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
  ...(open && {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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

const ContentWrapper = styles.div`
  position: relative;
  width: 100%;
  max-width: 32rem;
  height: 90%;
  margin-left: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
  }
  &:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
  }
`;

const InnerWrapper = styles.div`
width: 100%;
max-width: 32rem;
height: 100%;
background: white;
`;
