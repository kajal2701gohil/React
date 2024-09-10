import React, { ChangeEvent, useState } from "react";

const ToDo: React.FC = () => {
  const [allTodo, setAllTodo] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (): void => {
    setAllTodo([...allTodo, newTodo]);
    setNewTodo("");
  };

  const delTodo = (index: number): void => {
    allTodo.splice(index, 1);
    setAllTodo([...allTodo]);
  };

  return (
    <div className="text-center p-5 position-absolute top-50 start-50 translate-middle border ">
      <h2>To-Do List</h2>
      <div className="justify-content-between">
        <label htmlFor="" className="form-label">
          Add todo
        </label>
        <input
          type="text"
          value={newTodo}
          className="mx-2"
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setNewTodo(e.target.value)
          }
        />
        <button onClick={addTodo} className="btn btn-success">
          Add
        </button>
      </div>
      <div>
        <ul>
          {allTodo?.map((x, i: number) => (
            <li
              className="bg-secondary text-white text-start p-2 my-3 position-relative rounded"
              key={i}
            >
              {x}{" "}
              <button
                className="position-absolute top-0 end-0 btn btn-danger"
                onClick={(): void => delTodo(i)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
