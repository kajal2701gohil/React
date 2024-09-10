import React, { useDeferredValue, useMemo, useState } from "react";

const UseDeferredValue = () => {
  const [str, setStr] = useState("hello");
  const defer = useDeferredValue(str);
  const list = useMemo(() => {
    let arr = [];
    for (let i = 1; i <= 1000; i++) {
      arr[i] = defer;
    }
    return arr;
  }, [defer]);

  return (
    <div>
      <h2>{defer}</h2>
      <input type="text" onChange={(e) => setStr(e.target.value)} value={str} />
      {list?.map((x, i) => (
        <p key={i}>{x}</p>
      ))}
      {console.log(str, defer)}
    </div>
  );
};

export default UseDeferredValue;
