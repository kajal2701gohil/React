import React, { ChangeEvent, MouseEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  let [users, setUsers] = useState<User[]>([]);

  const path: NavigateFunction = useNavigate();

  const emptyObj: User = {
    name: "",
    email: "",
    password: "",
  };

  let [obj, setObj] = useState<User>(emptyObj);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setObj((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const addUser = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    users.push(obj);
    setUsers([...users]);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    path("/login");
  };

  return (
    <div className="border border-4 border-white shadow-lg w-25 position-absolute top-50 start-50 translate-middle p-4">
      <form>
        <h1>Registration</h1>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            type="text"
            id="name"
            onChange={(e): void => handleChange(e)}
          />
          <div className="name feedback"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            type="email"
            id="email"
            onChange={(e): void => handleChange(e)}
          />
          <div className="email feedback"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            onChange={(e): void => handleChange(e)}
          />
          <div className="password feedback"></div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e): void => addUser(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
