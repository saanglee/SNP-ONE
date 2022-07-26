import * as React from "react";
import { Container, LottieWrapper } from "./Animation.styled";
import { getAnimations } from "../../util/getAnimations";

type AnimationType = {
  animation?: any;
};

const Animation = (props: AnimationType) => {
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
