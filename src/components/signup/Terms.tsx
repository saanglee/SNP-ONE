import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  FormControl,
  DialogContent,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  DialogActions,
  Button,
  styled,
  IconButton,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface TermsProps {
  open: boolean;
  handleClose: () => void;
}

const Terms = ({ open, handleClose }: TermsProps) => {
  return (
    <StyledModal open={open}>
      <Header>
        <IconButton onClick={handleClose}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        서비스 이용약관
      </Header>
      <Title>개인(신용)정보 처리방침에 대한 동의안내</Title>
      {/* <Title>제3자 정보제공에 대한 동의 안내</Title> */}
      <p>
        한국신용정보원은 회원가입 등을 위하여 ⌈개인정보보호법⌋ 및
        ⌈신용정보의이용및보호에관한법률⌋에 따라 아래와 같이 개인(신용)정보를
        수집 · 이용하기 위하여 귀하의 동의가 필요합니다. 제1조 개인(신용)정보의
        수집 · 이용 목적 서비스 이용 및 회원 관리 고지사항 전달 제2조 수집 ·
        이용할 개인정보 회원가입에 필요한 정보 · 아이디, 비밀번호, 성명,
        생년월일, 성별, 전자우편주소(단, 회원관리, 법령의무이행 등이 어려운
        전자우편주소 제외) 서비스 이용과정에서 자동으로 생성 · 수집되는 정보 ·
        IP주소, 서비스이용기록 제3조 개인(신용)정보의 보유 · 이용 기간 위
        개인정보는 수집 · 이용에 관한 동의일(회원가입일)로부터 회원 탈퇴 시 까지
        위 이용목적을 위하여 보유 · 이용됩니다. 단, 회원 탈퇴 후에는 민원처리 및
        분쟁해결, 법령상 의무이행을 위하여 3년간 보유 · 이용됩니다. 제4조 동의를
        거부할 권리 및 동의를 거부할 경우의 불이익 위 개인정보의 수집 · 이용에
        대한 동의는 회원가입을 위하여 필수적이므로 위 사항에 동의하셔야만 제공
        서비스를 이용할 수 있습니다.
      </p>
    </StyledModal>
  );
};

export default Terms;

const Header = styled("header")({
  width: "100%",
  height: "2rem",
  lineHeight: "3rem",
});
const Title = styled("h3")({
  width: "100%",
  height: "2rem",
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

const StyledModalContent = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "50%",
  background: "#fff",
  zIndex: 100,
});

const StyledModalHeader = styled(Box)({
  paddingBlock: 1,
  width: "100%",
});
