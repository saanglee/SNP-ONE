import React from "react";

import * as loopAnimation from "../static/animations/loop.json";
import * as doneAnimation from "../static/animations/complete.json";
import * as mainAnimation from "../static/animations/joyful-background.json";
import * as springAnimation from "../static/animations/spring-background.json";
import * as underwaterAnimation from "../static/animations/underwater-background.json";
import * as businessAnimation from "../static/animations/business-background.json";
import * as naturalAnimation from "../static/animations/natural-background.json";
import * as For404Animation from "../static/animations/error-404-background.json";
import * as SpinAnimation from "../static/animations/spin3-background.json";
import * as ArrowAnimation from "../static/animations/arrow.json";

type AnimationType = {
  animation?: string | undefined;
};

export const getAnimations = (animation: AnimationType) => {
  switch (animation) {
    case "naturalAnimation":
      return naturalAnimation;
    case "For404Animation":
      return For404Animation;
    case "SpinAnimation":
      return SpinAnimation;
    case "ArrowAnimation":
      return ArrowAnimation;
    case "businessAnimation":
      return businessAnimation;
    case "underwaterAnimation":
      return underwaterAnimation;
  }
};
