import { useDebugValue, useState } from "react";

export const CustomHook = (initial = 10) => {
  const [count, setCount] = useState(initial);
  useDebugValue(count ? "true" : "false");
  //   let test = setCount((e) => e + 1);
  const test = () => {
    setCount((e) => e + 1);
  };
  return [count, test];
};
