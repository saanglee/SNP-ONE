import Layout from "../components/layout/Layout";
import { Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
        여기서 페이지 2개로 이동 코드설명이나 간단한거 적어도 좋을듯
      </Typography>
    </Layout>
  );
};

export default Home;
