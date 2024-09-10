import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [num, setNum] = useState(10);

  useEffect(() => {
    console.log("run on every render...");
  });

  useEffect(() => {
    console.log("page is rendering....1");
  }, []);

  useEffect(() => {
    console.log("page is rendering....");
    return () => {
      console.log("return function...");
    };
  }, [num]);

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setNum((e) => e + 1)}>click</button>
      <h3>{num}</h3>
    </div>
  );
};

export default Useeffect;
