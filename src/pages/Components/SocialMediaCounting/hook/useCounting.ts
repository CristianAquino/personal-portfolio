import { useEffect, useRef, useState } from "react";

export type useCountingProps = {
  min: number;
  max: number;
  time: number;
  increment: number;
};

export function useCounting({
  min = 0,
  max = 100,
  time = 10,
  increment = 1,
}: Partial<useCountingProps>) {
  const [count, setCount] = useState(min);
  const ref = useRef<any>(null);

  useEffect(() => {
    clearInterval(ref.current);
    if (count < max) {
      ref.current = setInterval(() => {
        setCount((prev) => prev + increment);
      }, time);
    } else {
      clearInterval(ref.current);
    }
  }, [count]);

  return [count];
}
