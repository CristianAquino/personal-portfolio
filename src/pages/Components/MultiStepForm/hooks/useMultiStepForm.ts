import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  let step = steps[currentStepIndex];
  let isFirstStep = currentStepIndex === 0;
  let isLastStep = currentStepIndex === steps.length - 1;

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };
  const previous = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    goToStep,
    next,
    previous,
  };
}
