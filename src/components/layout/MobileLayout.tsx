import React from "react";
import {
  Container,
  Box,
  styled,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadedStatus, openStatus } from "../../store/global";
import Animation from "../../elements/Animations/Animation";
import styles from "styled-components";
import MobileHeader from "./MobileHeader";
import CircularMenu from "./CircularMenu";
import { isModalState } from "../../store/form";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Title from "../../elements/Texts/Title";
import Text from "../../elements/Texts/Text";
import LandingPage from "./LandingPage";
interface LayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useRecoilState(openStatus);

  const [isModal, setIsModal] = useRecoilState(isModalState);
  const loading = useRecoilValue(loadedStatus);

  const md = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#f6f6f6",
      }}
    >
      <Main>
        <Animation animation="naturalAnimation" />

        {open && (
          <>
            <ArrowBox>
              <Animation animation="ArrowAnimation" />
            </ArrowBox>
            <HtmlTooltip
              placement="left"
              title={
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "0.3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Title color="#666666" size={1.7}>
                    TIP : 창 크기를 줄여보세요
                  </Title>
                  <Text color="#383333" size={1.5} mx={8} my={4}>
                    {"현재 페이지는 모바일 화면에서 가장 잘 보입니다."}
                  </Text>
                </div>
              }
            >
              <button
                style={{
                  border: 0,
                  outline: 0,
                  backgroundColor: "transparent",
                  display: "fixed",
                  height: "100vh",
                  width: "100px",
                  position: "fixed",
                  right: 0,
                }}
              ></button>
            </HtmlTooltip>
          </>
        )}

        <StyledWrapper>
          <CircularMenu />
          {!open && <LandingPage />}
          {open && (
            <>
              {md && (
                <MobileInnerWrapper>
                  <MobileHeader />
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      paddingBottom: "3rem",
                    }}
                  >
                    {children}
                  </Box>
                </MobileInnerWrapper>
              )}
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
                      <MobileContent isModal={isModal}>
                        {children}
                      </MobileContent>
                    </InnerWrapper>
                  </MobileWrapper>
                </Box>
              )}
            </>
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

const StyledWrapper = styled(Container)({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: 1,
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

const InnerWrapper = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "90%",
  border: "1px solid #8c8c8c",
});

const MobileInnerWrapper = styles.div`
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

const ArrowBox = styles.div`
width: 8rem;
position: fixed;
right:0;
transform: rotate(180deg);
`;

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#6AE9CF",
    color: "#666666",
    maxWidth: 240,
    marginRight: 10,
    marginBottom: 50,
    fontSize: theme.typography.pxToRem(12),
    border: 0,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
}));
