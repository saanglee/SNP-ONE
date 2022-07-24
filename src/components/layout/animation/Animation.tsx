import * as React from "react";
import { Options } from "react-lottie";
import { Container, LottieWrapper } from "./Animation.styled";
import * as loopAnimation from "./animations/loop.json";
import * as doneAnimation from "./animations/complete.json";
import * as mainAnimation from "./animations/joyful-background.json";
import * as springAnimation from "./animations/spring-background.json";
import * as underwaterAnimation from "./animations/underwater-background.json";
import * as businessAnimation from "./animations/business-background.json";
import * as naturalAnimation from "./animations/natural-background.json";
import * as For404Animation from "./animations/error-404-background.json";

type AnimationType = {
  animation?: string;
};

type ContainerType = {
  size?: string;
};

const Animation = (props: AnimationType) => {
  const animationCompleteOptions = {
    loop: true,
    autoplay: true,
    animationData: naturalAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animation404Options = {
    loop: true,
    autoplay: true,
    animationData: For404Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container size={props?.animation}>
      <LottieWrapper
        isClickToPauseDisabled
        options={
          props?.animation === "For404Animation"
            ? animation404Options
            : animationCompleteOptions
        }
      />
    </Container>
  );
};

export default Animation;
