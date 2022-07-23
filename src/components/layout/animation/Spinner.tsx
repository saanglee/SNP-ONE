import * as React from "react";
import { Options } from "react-lottie";
import { Container, LottieWrapper } from "./Animation.styled";
import * as SpinAnimation from "./animations/spin3-background.json";

type AnimationType = {
  animation?: string;
};

const Spinner = (props: AnimationType) => {
  const animationCompleteOptions = {
    loop: true,
    autoplay: true,
    animationData: SpinAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <LottieWrapper
        isClickToPauseDisabled
        options={animationCompleteOptions}
      />
    </Container>
  );
};

export default Spinner;
