import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  FormControlLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  Switch,
  Button,
  Box,
  Checkbox,
  styled,
  Typography,
} from "@mui/material";
import FormInput from "../form/FormInput";
import FormRadio from "../form/FormRadio";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ResidenceSelect from "./ResidenceSelect";
import Terms from "./Terms";
import FormCheckbox from "../form/FormCheckbox";

const SignForm = () => {
  const [value, setValue] = React.useState("female");
  const [isSelectOpen, setISSelectOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [termsType, setTermsType] = useState("개인정보");
  const [ckeckApply, setCheckApply] = useState(false);

  const nameRef = React.useRef<HTMLInputElement | any>(null);
  const birthRef = React.useRef<HTMLInputElement | any>(null);
  const phoneRef = React.useRef<HTMLInputElement | any>(null);
  const emailRef = React.useRef<HTMLInputElement | any>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleResidenceOpen = () => {
    setIsTermsOpen(true);
  };
  const handleResidenceClose = () => {
    setIsTermsOpen(false);
  };

  const handleTermsOpen = (event: string): void => {
    setIsTermsOpen(true);
    setTermsType(event);
  };
  const handleTermsClose = () => {
    setIsTermsOpen(false);
  };
  return (
    <FormGroup>
      {/* <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="mode switch"
      /> */}
      <FormInput title="이름" inputRef={nameRef} />
      <FormRadio type="radio" title="성별" values={["female", "male"]} />
      <FormInput
        title="생년월일"
        placeholder="YYYY.MM.DD"
        inputRef={birthRef}
        inputProps={{
          maxLength: 8,
        }}
      />
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ mb: 2, fontWeight: 500 }}>거주지역</Typography>
        <Button variant="outlined" onClick={handleResidenceOpen}>
          거주지역 선택
        </Button>
      </Box>
      <ResidenceSelect open={isSelectOpen} handleClose={handleResidenceClose} />
      <FormInput
        title="연락처"
        inputRef={phoneRef}
        inputProps={{
          maxLength: 11,
        }}
      />
      <FormInput title="이메일" inputRef={emailRef} />
      <FormCheckbox
        type="checkbox"
        title="주로 이용하는 교통 수단"
        subText="주로 이용하는 교통 수단을 모두 선택해주세요."
        values={[
          "버스",
          "지하철",
          "택시",
          "KTX/기차",
          "도보",
          "자전거",
          "전동킥보드",
          "자가용",
        ]}
      />

      <FormControlLabel
        label="이용약관 모두 동의"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      <Box sx={{ ml: 1, mb: 3 }}>
        <StyledTerms>
          <FormControlLabel
            label={
              <Typography sx={{ fontSize: 14 }}>
                개인정보 처리방침 고지(필수)
              </Typography>
            }
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <Button onClick={() => handleTermsOpen("개인정보")}>
            <KeyboardArrowRightIcon />
          </Button>
        </StyledTerms>
        <StyledTerms>
          <FormControlLabel
            label={
              <Typography sx={{ fontSize: 14 }}>
                제3자 정보제공 동의(필수)
              </Typography>
            }
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
          <Button onClick={() => handleTermsOpen("제3자")}>
            <KeyboardArrowRightIcon />
          </Button>
          <Terms
            open={isTermsOpen}
            type={termsType}
            handleClose={handleTermsClose}
          />
        </StyledTerms>
      </Box>
      <Button
        disabled={ckeckApply === false}
        variant="contained"
        sx={{ height: 48, fontSize: 16 }}
      >
        지원하기
      </Button>
    </FormGroup>
  );
};
export default SignForm;

const StyledTerms = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
