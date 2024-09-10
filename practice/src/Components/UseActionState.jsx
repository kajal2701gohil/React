"use client";
import { React, useActionState } from "react";

const UseActionState = () => {
  function test(prevState, formData) {
    console.log(prevState, formData);
  }
  const [state, formAction] = useActionState(test, 10);
  return (
    <div>
      <form action="">
        {/* <input type="text" /> */}
        <button formAction={formAction}>submit</button>
      </form>
    </div>
  );
};

export default UseActionState;
