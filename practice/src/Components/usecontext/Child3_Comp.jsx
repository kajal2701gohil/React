import React, { useContext } from "react";
import { User } from "./Use_Context";

const Child3_Comp = () => {
  //   const num = useContext(User);
  const [str, setStr] = useContext(User);

  return (
    <div>
      <h3>Child3 {str}</h3>
      <button onClick={() => setStr("Hello World")}>click</button>
    </div>
  );
};

export default Child3_Comp;
