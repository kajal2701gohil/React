import React, { useRef } from "react";

const Useref = () => {
  //   const n = useRef(0);
  const num = useRef(null);
  //   const test = () => {
  //     n.current = n.current + 1;
  //   };
  //   console.log(num.current);
  return (
    <div>
      <input type="text" ref={num} />
      <button onClick={() => num.current.focus()}>Focus the input</button>
      {/* <h2>{n.current}</h2>
      <button onClick={test}>click</button>
      <input type="text" ref={num} /> */}
    </div>
  );
};

export default Useref;
