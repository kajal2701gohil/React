import React, { forwardRef, useImperativeHandle, useState } from "react";

const Useimperativechild = forwardRef((props, ref) => {
  const [num, setNum] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      test,
    };
  });
  const test = () => {
    setNum((e) => e + 1);
  };
  return (
    <div>
      <h3>child {num}</h3>
      <button onClick={test}>click</button>
    </div>
  );
});

export default Useimperativechild;
