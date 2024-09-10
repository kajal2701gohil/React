import React, { useState, useTransition } from "react";

const arr = [1, 2, 3, 4, 5];

const UseTransition = () => {
  const [list, setList] = useState(arr);
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const listSize = 10000;

  function handleChange(e) {
    setName(e.target.value);
    startTransition(() => {
      for (let i = 0; i <= listSize; i++) {
        list[i] = e.target.value;
      }
      setList(list);
    });
  }

  return (
    <div>
      <input type="text" value={name} onInput={handleChange} />
      {isPending ? (
        "pending...."
      ) : (
        <>
          {list?.map((x, i) => {
            return (
              <p>
                {i + 1}. list name:-{x}
              </p>
            );
          })}
        </>
      )}
    </div>
  );
};

export default UseTransition;
