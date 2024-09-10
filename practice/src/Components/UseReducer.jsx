import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    console.log(action);
    if (action === "increment") {
      return state + 1;
    }
    if (action === "decrement") {
      return state - 1;
    }
  };

  const main = (array, action) => {
    switch (action.type) {
      case "add":
        return [...array, array.pop() + 1];
      case "del":
        const edit = [...array];
        edit.pop();
        return edit;
      default:
        return array;
    }
  };

  const [state, dispatch] = useReducer(reducer, 10);

  const [array, dispatch1] = useReducer(main, [1, 2, 3, 4, 5]);

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <div>
        <h3>{array.join(" | ")}</h3>
        <button onClick={() => dispatch1({ type: "add" })}>add</button>
        <button onClick={() => dispatch1({ type: "del" })}>delete</button>
      </div>
    </div>
  );
};

export default UseReducer;
