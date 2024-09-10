import React from "react";
import { CustomHook } from "./CustomHook";

const UseDebugValue = () => {
  const [num, setNum] = CustomHook();
  console.log(num);
  return (
    <div>
      <h1>usedebugvalue</h1>
      <button onClick={setNum}>click</button>
    </div>
  );
};

export default UseDebugValue;
