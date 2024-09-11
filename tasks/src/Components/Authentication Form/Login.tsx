import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  name?: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const data = JSON.parse(localStorage.getItem("users") || "[]");

  const emptyObj: User = {
    email: "",
    password: "",
  };

  let [obj, setObj] = useState<User>(emptyObj);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setObj((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const checkUser = (): void => {
    console.log(obj, data);
    let loginUser = data.find((x: User) => x.email === obj.email);
    if (loginUser) {
      if (loginUser.password === obj.password) {
        console.log("login");
      } else {
        console.log("incorrect password");
      }
    } else {
      console.log("incorrect email");
    }
  };

  return (
    <div className="border border-4 border-white shadow-lg w-25 position-absolute top-50 start-50 translate-middle p-4">
      <form>
        <h1>Login</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e): void => handleChange(e)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e): void => handleChange(e)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={checkUser}>
          Submit
        </button>
        <Link to={"/registration"} className="btn btn-success">
          Registration
        </Link>
      </form>
    </div>
  );
};

export default Login;
