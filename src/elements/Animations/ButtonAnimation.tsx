import * as React from "react";
import { Options } from "react-lottie";
import { getAnimations } from "../../util/getAnimations";
import { Container, LottieWrapper } from "./ButtonAnimation.styled";

type AnimationType = {
  animation?: any;
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

const ButtonAnimation = (props: AnimationType) => {
  const animationLoopOptions = {
    loop: true,
    autoplay: true,
    animationData: getAnimations(props?.animation[0]),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animationCompleteOptions = {
    loop: false,
    autoplay: true,
    animationData: getAnimations(props?.animation[1]),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
        handleLoopComplete();
      }}
    >
      <LottieWrapper isClickToPauseDisabled options={animationOptions} />
    </Container>
  );
};

export default ButtonAnimation;
