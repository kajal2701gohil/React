import React, { Fragment, useState } from "react";

const Comp = () => {
  const [arr, setArr] = useState([]);
  const [task, setTask] = useState("");

  function taskDel(a) {
    arr.splice(a, 1);
    setArr([...arr]);
  }

  function editTask(b) {
    console.log(b);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        onClick={() => {
          setArr([...arr, task]);
          setTask("");
        }}
      >
        add
      </button>
      <div>
        <ul>
          {arr?.map((x, i) => (
            <Fragment key={i}>
              <li>
                <input type="checkbox" />

                {x}
                <button onClick={() => editTask(i)}>Edit</button>
                <button onClick={() => taskDel(i)}>Delete</button>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comp;
