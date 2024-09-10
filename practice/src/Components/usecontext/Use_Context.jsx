import React, { createContext, useState } from "react";
import Child_Comp from "./Child_Comp";

export const User = createContext("");

const Use_Context = () => {
  const [person, setPerson] = useState("hello");
  console.log(person);

  return (
    <div>
      <h3>usecontext</h3>
      <User.Provider value={[person, setPerson]}>
        <Child_Comp />
      </User.Provider>
    </div>
  );
};

export default Use_Context;
