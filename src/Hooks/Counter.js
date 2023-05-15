import { useState } from "react";
// import { useInput } from "./UseInput";

export function UseCounter() {
  const [count, setCount] = useState(1);

  const inc = (number) => {
    setCount((prev) => prev + number);
  };
  const dec = (number) => {
    setCount(count > 0 ? (prev) => prev - number : 0);
  };

  const reset = () => {
    setCount((prev) => (prev = 0));
  };

  return {
    count,
    inc,
    dec,
    reset,
  };
}
