import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const UseState = () => {
  const [num, setNum] = useState(10);
  return (
    <div>
      <h2>UseState {num}</h2>
      <Child1 data={num} method={setNum} />
      <Child2 />
    </div>
  );
};

export default UseState;
