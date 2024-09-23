import React, { ChangeEvent, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

interface User {
  name?: string;
  email: string;
  password: string;
}

interface Iprops {
  method: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Iprops> = ({ method }) => {
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
    let index = data.findIndex((x: User) => x.email === obj.email);
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
      loginUser.id = index;
      localStorage.setItem("isLogin", JSON.stringify(true));
      localStorage.setItem("activeUser", JSON.stringify(loginUser));
      path("/");
    }
  };

  return (
    <div className="flex justify-content-center flex-wrap parentDiv align-items-center">
      <div className="border-1 border-primary-500 shadow-1 w-3 p-4 ">
        <form>
          <h1>Login</h1>
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="email"
              onChange={(e): void => handleChange(e)}
            />

            {errEmail && <span className="text-red-500">{errEmail}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              id="password"
              onChange={(e): void => handleChange(e)}
            />
            {errPassword && <span className="text-red-500">{errPassword}</span>}
          </div>

          <Button
            label="Submit"
            onClick={checkUser}
            type="button"
            className="mx-1"
          />
          <Link to={"/registration"}>
            <Button label="Registration" severity="warning" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
