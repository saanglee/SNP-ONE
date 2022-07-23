import Layout from "../components/layout/Layout";
import { Typography } from "@mui/material";
import React from "react";
import Title from "../components/layout/Texts/Title";
import Subtitle from "../components/layout/Texts/Subtitle";
import Text from "../components/layout/Texts/Text";

const Home = () => {
  return (
    <Layout>
      <Title size={3} my={80} mx={30}>
        폰트 적용
      </Title>
      <Subtitle size={1.6} my={-1}>
        폰트 적용
      </Subtitle>
      <Text size={1.3} color="red">
        폰트 적용 <br />
        <span>dsfjlksdf</span>
      </Text>
      <Text size={1.3}> 폰트 적용</Text>
    </Layout>
  );
};

export default Home;
