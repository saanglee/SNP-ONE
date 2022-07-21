import Layout from "../components/layout/Layout";
import MobileLayout from "../components/layout/MobileLayout";
import { Typography } from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <MobileLayout>
      <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
        여기는 모바일페이지 모바일 레이아웃을 이용하여 어플을 웹페이지에서
        보는느낌
      </Typography>
    </MobileLayout>
  );
};

export default SignUp;
