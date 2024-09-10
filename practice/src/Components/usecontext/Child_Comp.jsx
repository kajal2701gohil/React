import React, { useContext } from "react";
import Child2_Comp from "./Child2_Comp";
import { User } from "./Use_Context";

const Child_Comp = () => {
  const [data, setData] = useContext(User);
  console.log(data);

  return (
    <div>
      <h2>child {data}</h2>

      <Child2_Comp />
    </div>
  );
};

export default Child_Comp;
