import React, { useState } from "react";

const list = [
  "Harry",
  "Ross",
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
];
const Condition = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(true);

  const test = (e) => {
    count < list.length - 1 ? setCount((e) => e + 1) : setCount(0);
    console.log(count);
    setNum(!num);
    let color = num ? "green" : "red";
    e.target.style.backgroundColor = color;
  };
  return (
    <div>
      <button onClick={test}>click</button>
      <h1>{list[count]}</h1>
    </div>
  );
};

export default Condition;
