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

interface LayoutProps {
  children: React.ReactNode;
}

const sidebarWidth = 240;

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(true);
  const sign = false;
  // const [loading, setLoading] = useRecoilState(loadedStatus);
  const loading = useRecoilValue(loadedStatus);
  const md = useMediaQuery("(max-width:900px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        // background: "#f6f6f6",
        background: "white",
      }}
    >
      <Header />
      <Main>
        <StyledWrapper>{children}</StyledWrapper>
      </Main>
      {loading && (
        <StyledSpinner>
          <CircularProgress />
        </StyledSpinner>
      )}
    </Box>
  );
};

export default Layout;

const StyledWrapper = styled(Container)({
  position: "relative",
  overflowY: "scroll",
  width: "100%",
  height: "100%",
  paddingTop: 100,
  paddingBottom: 80,
});

const Main = styled("main")({
  flexGrow: 1,
  width: "100%",
});

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
