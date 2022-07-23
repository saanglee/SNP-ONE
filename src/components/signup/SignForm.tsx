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
  const [selectOpen, setSelectOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

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
    setSelectOpen(true);
  };
  const handleResidenceClose = () => {
    setSelectOpen(false);
  };

  const handleTermsOpen = () => {
    setTermsOpen(true);
  };
  const handleTermsClose = () => {
    setTermsOpen(false);
  };
  return (
    <FormGroup>
      {/* <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="mode switch"
      /> */}
      <FormInput title="이름" />
      <FormRadio type="radio" title="성별" values={["female", "male"]} />
      <FormInput title="생년월일" placeholder="YYYY.MM.DD" />
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ mb: 2, fontWeight: 500 }}>거주지역</Typography>
        <Button variant="outlined" onClick={handleResidenceOpen}>
          거주지역 선택
        </Button>
      </Box>
      <ResidenceSelect open={selectOpen} handleClose={handleResidenceClose} />
      <FormInput title="연락처" />
      <FormInput title="이메일" />
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
          <Button onClick={handleTermsOpen}>
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
          <Button onClick={handleTermsOpen}>
            <KeyboardArrowRightIcon />
          </Button>
          <Terms open={termsOpen} handleClose={handleTermsClose} />
        </StyledTerms>
      </Box>
      <Button variant="contained" sx={{ height: 48, fontSize: 16 }}>
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
