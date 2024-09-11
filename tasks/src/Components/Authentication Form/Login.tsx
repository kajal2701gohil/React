import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

interface User {
  name?: string;
  email: string;
  password: string;
}

interface Iprops {
  info: boolean;
  method: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Iprops> = ({ info, method }) => {
  const data = JSON.parse(localStorage.getItem("users") || "[]");

  const [errEmail, setErrEmail] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");

  const path: NavigateFunction = useNavigate();

  const emptyObj: User = {
    email: "",
    password: "",
  };

  let [obj, setObj] = useState<User>(emptyObj);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setObj((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const checkUser = (): void => {
    let loginUser = data.find((x: User) => x.email === obj.email);
    if (!loginUser) {
      setErrEmail("Incorrect email");
    } else {
      setErrEmail("");
    }
    if (loginUser?.password !== obj.password) {
      setErrPassword("Incorrect Password");
    } else {
      setErrPassword("");
    }
    if (loginUser && loginUser.password === obj.password) {
      method(true);
      localStorage.setItem("isLogin", JSON.stringify(true));
      path("/");
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

          {errEmail && <span className="text-danger">{errEmail}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e): void => handleChange(e)}
          />
          {errPassword && <span className="text-danger">{errPassword}</span>}
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
