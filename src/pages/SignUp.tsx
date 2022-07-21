import React from "react";
import Layout from "../components/layout/Layout";
import MobileLayout from "../components/layout/MobileLayout";

import { styled } from "@mui/material/styles";
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
} from "@mui/material";

const SignUp = () => {
  const [value, setValue] = React.useState("female");

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

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="개인정보 처리방침 고지(필수)"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="제3자 정보제공 동의(필수)"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  return (
    <MobileLayout>
      여기는 모바일페이지 모바일 레이아웃을 이용하여 어플을 웹페이지에서
      보는느낌 컴포넌트 안에있는 Sign을 불러올수이써여
      <Title>크라우드 워커에 지원하기 위해 필요한 정보를 입력해 주세요</Title>
      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="mode switch"
        />
        <InputLabel htmlFor="component-simple">이름</InputLabel>
        <Input
          id="component-simple"
          value={name}
          onChange={handleChange}
          placeholder={"홍길동"}
        />
        <FormLabel id="demo-controlled-radio-buttons-group">성별</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="여자" />
          <FormControlLabel value="male" control={<Radio />} label="남자" />
        </RadioGroup>
        <InputLabel htmlFor="component-simple">생년월일</InputLabel>
        <Input
          id="component-simple"
          // value={birth}
          onChange={handleChange}
          placeholder={"YYYY.MM.DD"}
        />
        <InputLabel htmlFor="component-simple">연락처</InputLabel>
        <Input
          id="component-simple"
          // value={number}
          onChange={handleChange}
          placeholder={"'-'없이 입력해 주세요"}
        />
        <InputLabel htmlFor="component-simple">이메일</InputLabel>
        <Input
          id="component-simple"
          // value={email}
          onChange={handleChange}
          placeholder={"snpone@naver.com"}
        />
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="버스" />
          <FormControlLabel value="male" control={<Radio />} label="지하철" />
          <FormControlLabel value="other" control={<Radio />} label="택시" />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="KTX/기차"
          />
        </RadioGroup>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="male" control={<Radio />} label="도보" />
          <FormControlLabel value="other" control={<Radio />} label="자전거" />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="전동킥보드"
          />
          <FormControlLabel value="male" control={<Radio />} label="자가용" />
        </RadioGroup>
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
        {children}
        <Button variant="contained">지원하기</Button>
      </FormGroup>
    </MobileLayout>
  );
};

export default SignUp;

// darkMode
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff",
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
const Title = styled("h3")({
  width: "100%",
  height: "4rem",
});
