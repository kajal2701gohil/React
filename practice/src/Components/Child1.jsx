import React, { useState } from "react";

const Child1 = ({ data, method }) => {
  return (
    <div>
      <h2>Child1 {data}</h2>
      <button onClick={() => method((e) => e + 1)}>click</button>
    </div>
  );
};

export default Child1;
