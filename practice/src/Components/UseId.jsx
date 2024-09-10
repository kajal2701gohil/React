import React, { useId } from "react";

const UseId = () => {
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const Id = useId();
  return (
    <div>
      <form action="">
        <label htmlFor={Id + "firstname"}>First-name</label>
        <input type="text" id={Id + "firstname"} />
        <label htmlFor={Id + "lastname"}>Last-name</label>
        <input type="text" id={Id + "lastname"} />
        <label htmlFor={Id + "email"}>Email</label>
        <input type="email" id={Id + "email"} />
        {/* <label htmlFor={firstNameId}>First-name</label>
        <input type="text" id={firstNameId} />
        <label htmlFor={lastNameId}>Last-name</label>
        <input type="text" id={lastNameId} />
        <label htmlFor={emailId}>Email</label>
        <input type="email" id={emailId} /> */}
      </form>
    </div>
  );
};

export default UseId;
