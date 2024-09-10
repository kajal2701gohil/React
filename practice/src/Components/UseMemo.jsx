import React, { useMemo, useState } from "react";

const nums = new Array(10000000).fill("A").map((_, b) => {
  return {
    index: b,
    isPossible: b === 9900000,
  };
});

const UseMemo = () => {
  //   const n = nums.findIndex((x) => x.isPossible === true);
  const [count, setCount] = useState(10);
  const [test, setTest] = useState(nums);
  const n = useMemo(() => {
    return test.findIndex((x) => x.isPossible === true);
  }, [test]);
  return (
    <div>
      <h3>{n}</h3>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount((e) => e + 1);
          if (count === 15) {
            setTest(
              new Array(1000000).fill("A").map((_, b) => {
                return {
                  index: b,
                  isPossible: b === 999000,
                };
              })
            );
          }
        }}
      >
        click
      </button>
    </div>
  );
};

export default UseMemo;
