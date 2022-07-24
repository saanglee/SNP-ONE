import React, { useState } from "react";
import {
  FormGroup,
  FormControlLabel,
  Button,
  Box,
  Checkbox,
  styled,
  Typography,
} from "@mui/material";
import FormInput from "../form/FormInput";
import FormRadio from "../form/FormRadio";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ResidenceSelect from "./ResidenceSelect";
import Terms from "./Terms";
import FormCheckboxBtn from "../form/FormCheckboxBtn";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  phone: string;
  birth: string;
  email: string;
  name: string;
  transportation: string;
  gender: string;
};
const SignForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: any) => console.log(data);

  const [value, setValue] = React.useState("female");
  const [isSelectOpen, setISSelectOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [termsType, setTermsType] = useState("개인정보");
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        {/* <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="mode switch"
      /> */}
        <FormInput title="이름" name="name" control={control} />
        <Box sx={{ mt: 1 }}>
          <FormRadio
            name="gender"
            title="성별"
            control={control}
            values={["female", "male"]}
          />
        </Box>
        <FormInput
          title="생년월일"
          placeholder="YYYY.MM.DD"
          name="DateOfBirth"
          control={control}
          inputProps={{
            maxLength: 8,
          }}
        />
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 2, fontWeight: 500 }}>거주지역</Typography>
          <Button variant="outlined" onClick={handleResidenceOpen}>
            거주지역 선택
          </Button>
          <Typography sx={{ mt: 1, fontSize: 14 }}>
            선택한 거주지 들어갑니다
          </Typography>
        </Box>
        <ResidenceSelect
          open={isSelectOpen}
          handleClose={handleResidenceClose}
        />
        <FormInput
          title="연락처"
          name="phone"
          control={control}
          inputProps={{
            maxLength: 11,
          }}
        />
        <FormInput title="이메일" name="email" control={control} />
        <FormCheckboxBtn
          name="transportation"
          control={control}
          register={register}
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
              control={
                <Checkbox checked={checked[0]} onChange={handleChange2} />
              }
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
              control={
                <Checkbox checked={checked[1]} onChange={handleChange3} />
              }
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
          type="submit"
          // disabled={ckeckApply === false}
          variant="contained"
          sx={{ height: 48, fontSize: 16 }}
        >
          지원하기
        </Button>
      </FormGroup>
    </form>
  );
};
export default SignForm;

const StyledTerms = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
