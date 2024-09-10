import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const ref = useRef(null);
  let count = "red";
  //   const [count, setCount] = useState("red");
  useEffect(() => {
    count = "yellow";
    console.log("useeffect.....", count);
  });

  useLayoutEffect(() => {
    console.log("uselayout effect", count);
  });
  return (
    <div>
      <h2 ref={ref}>uselayouteffect</h2>
      <h3>{count}</h3>
      <button>click</button>
    </div>
  );
};

export default UseLayoutEffect;
