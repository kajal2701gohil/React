import React, { useCallback, useState } from "react";
import Navbar from "./Navbar";
import "./style.css";

const UseCallback = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(10);

  //   function test() {
  //     return "number";
  //   }
  const test = useCallback(() => {
    return num;
  }, [num]);

  return (
    <div>
      <Navbar data={"num"} test={test} />
      <h1>{num}</h1>
      <h1>count:{count}</h1>
      <button onClick={() => setNum((e) => e + 1)}>click</button>
      <button onClick={() => setCount((e) => e + 1)}>click</button>
    </div>
  );
};

export default UseCallback;
