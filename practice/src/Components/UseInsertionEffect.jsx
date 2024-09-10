import React, { useEffect, useInsertionEffect, useLayoutEffect } from "react";

const UseInsertionEffect = () => {
  const arr = {
    color: "red",
    fontSize: "25px",
    backgroundColor: "yellow",
  };
  useEffect(() => {
    console.log("effect");
  });

  useLayoutEffect(() => {
    console.log("layout");
  });

  useInsertionEffect(() => {
    console.log("insertion");
    const styleEle = document.createElement("style");
    styleEle.innerHTML = arr;
    document.head.appendChild(styleEle);
  });
  return (
    <div>
      <h1 style={arr}>hello</h1>
    </div>
  );
};

export default UseInsertionEffect;
