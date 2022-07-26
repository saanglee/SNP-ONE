import React from "react";
import { Box, styled, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface TermsProps {
  open: boolean;
  header: string;
  title: string;
  subTitle: string;
  content: string;
  handleClose: () => void;
}

const Terms = ({
  open,
  header,
  title,
  subTitle,
  content,
  handleClose,
}: TermsProps) => {
  return (
    <StyledModal open={open}>
      <Header>
        <IconButton onClick={handleClose}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography sx={{ fontWeight: 700 }}>{header}</Typography>
      </Header>
      <StyledModalBody>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
        <StyledModalText
          dangerouslySetInnerHTML={{ __html: content }}
        ></StyledModalText>
      </StyledModalBody>
    </StyledModal>
  );
};

export default Terms;

const Header = styled("header")({
  display: "flex",
  alignItems: "center",
  paddingBlock: 16,
  paddingInline: 3,
});

const Title = styled("h2")({
  marginBlock: 0,
  fontSize: 18,
});

const Subtitle = styled(Typography)({
  fontSize: 18,
});

const StyledModal = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ open }) => ({
  display: open ? "block" : "none",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: "#fff",
  zIndex: 100,
}));

const StyledModalBody = styled(Box)({
  paddingInline: 16,
  overflowY: "scroll",
  height: "85%",
});

const StyledModalText = styled(Box)({
  fontSize: 14,
  wordBreak: "keep-all",
});
