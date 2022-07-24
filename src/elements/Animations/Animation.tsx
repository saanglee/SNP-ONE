import * as React from "react";
import { Options } from "react-lottie";
import { Container, LottieWrapper } from "./Animation.styled";
import * as For404Animation from "../../static/animations/error-404-background.json";
import { getAnimations } from "../../hooks/getAnimations";

type AnimationType = {
  animation?: any;
};

const Animation = (props: AnimationType) => {
  console.log();

  const animationCompleteOptions = {
    loop: true,
    autoplay: true,
    animationData: getAnimations(props?.animation),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container size={props?.animation}>
      <LottieWrapper
        isClickToPauseDisabled
        options={animationCompleteOptions}
      />
    </Container>
  );
};

export default Animation;
