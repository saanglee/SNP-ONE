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

const animationCompleteOptions = {
  loop: true,
  autoplay: true,
  animationData: naturalAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useCallback = (callback: any, values: any) => {
  const self = React.useRef({
    values,
    handler: (...args: any) => {
      return callback(new Error(...args, self.current.values));
    },
  });
  self.current.values = values;
  return self.current.handler;
};

const Animation = () => {
  const [animationSwap, setAnimationSwap] = React.useState<boolean | null>(
    false,
  );

  return (
    <Container>
      <LottieWrapper
        isClickToPauseDisabled
        options={animationCompleteOptions}
      />
    </Container>
  );
};

export default Animation;
