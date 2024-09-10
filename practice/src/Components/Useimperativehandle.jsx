import React, { useRef } from "react";
import Useimperativechild from "./Useimperativechild";
import Useref from "./Useref";

const Useimperativehandle = () => {
  const ref = useRef();
  return (
    <div>
      <h2>useimperativehook</h2>
      <button onClick={() => ref.current.test()}>parent click</button>
      <Useimperativechild ref={ref} />
    </div>
  );
};

export default Useimperativehandle;
