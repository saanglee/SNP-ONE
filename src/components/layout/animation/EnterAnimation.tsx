import * as React from "react";
import { Options } from "react-lottie";
import { Container, LottieWrapper } from "./Animation.styled";
import * as loopAnimation from "./animations/loop.json";
import * as doneAnimation from "./animations/complete.json";
import * as mainAnimation from "./animations/joyful-background.json";

const animationLoopOptions = {
  loop: true,
  autoplay: true,
  animationData: loopAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const animationCompleteOptions = {
  loop: false,
  autoplay: true,
  animationData: doneAnimation,
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
  const [animationOptions, setAnimationOptions] =
    React.useState<Options>(animationLoopOptions);
  const [animationSwap, setAnimationSwap] = React.useState<boolean | null>(
    false,
  );

  const handleLoopComplete = useCallback(
    (animationSwap: any) => {
      if (animationSwap) {
        setAnimationOptions(animationCompleteOptions);
        setAnimationSwap(null);
      }
    },
    [animationSwap],
  );

  return (
    <Container
      onClick={() => {
        setAnimationSwap(true);
      }}
    >
      <LottieWrapper
        isClickToPauseDisabled
        options={animationOptions}
        height={400}
        width={400}
        eventListeners={[
          {
            eventName: "loopComplete",
            callback: handleLoopComplete,
          },
        ]}
      />
    </Container>
  );
};

export default Animation;
