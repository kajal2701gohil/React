import React, { useSyncExternalStore } from "react";

let count = 10;
let emit = null;
const UseSyncExternalStore = () => {
  console.log("run...");
  function test() {
    count = count + 1;
    emit();
    console.log(count);
  }
  let subscribe = (notify) => {
    emit = notify;
  };
  let getSnapShot = () => {
    return count;
  };

  useSyncExternalStore(subscribe, getSnapShot);
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={test}>click</button>
    </div>
  );
};

export default UseSyncExternalStore;
