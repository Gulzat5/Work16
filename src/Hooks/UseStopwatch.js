import { useEffect, useState } from "react";

export const UseStopwatch = (state) => {
  const [count, setCount] = useState(state * 60);
  const [active, setActive] = useState(false);

  const Restart = () => {
    setCount(state * 60);
  };

  const StartCount = () => {
    setActive(true);
  };

  const Stop = () => {
    setActive(false);
  };

  useEffect(() => {
    if (!active) return;

    if (count <= 0) return;

    const id = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [count, active]);

  return {
    Restart,
    Stop,
    StartCount,
    count,
    active,
  };
};
