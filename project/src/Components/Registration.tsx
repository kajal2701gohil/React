import React, { ChangeEvent, MouseEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

interface User {
  name: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  let [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );
  const [errname, setErrName] = useState<string>("");
  const [errEmail, setErrEmail] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");
  const emptyObj: User = {
    name: "",
    email: "",
    password: "",
  };
  const path: NavigateFunction = useNavigate();
  let [obj, setObj] = useState<User>(emptyObj);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "profile") {
      let profile: FileList | null = e.target.files;

      let profileImage = await toBase64(profile);
      setObj((prevData) => ({ ...prevData, [e.target.id]: profileImage }));
    } else {
      setObj((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
    }
  };

  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const addUser = (): void => {
    if (obj.name === "") {
      setErrName("Please enter the name");
    } else {
      setErrName("");
    }
    if (obj.email === "") {
      setErrEmail("Please enter the email");
    } else {
      setErrEmail("");
    }
    if (obj.password === "") {
      setErrPassword("Please enter the password");
    } else {
      setErrPassword("");
    }
    if (obj.name && obj.email && obj.password) {
      users.push(obj);
      setUsers([...users]);
      localStorage.setItem("users", JSON.stringify(users));
      path("/login");
    }
  };

  return (
    <div className="flex justify-content-center flex-wrap parentDiv align-items-center">
      <div className="border-1 border-primary-500 shadow-1 w-3 p-4 ">
        <form>
          <h1>Registration</h1>
          <div className="mb-3">
            <label htmlFor="name">Username</label>
            <input
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              type="text"
              id="name"
              required
              onChange={(e) => handleChange(e)}
            />
            {errname && <span className="text-red-500">{errname}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              type="email"
              id="email"
              required
              onChange={(e) => handleChange(e)}
            />
            {errEmail && <span className="text-red-500">{errEmail}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              type="password"
              required
              id="password"
              onChange={(e) => handleChange(e)}
            />
            {errPassword && <span className="text-red-500">{errPassword}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="profile">Profile</label>
            <input
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              type="file"
              required
              id="profile"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <Button label="Submit" onClick={addUser} type="button" />
        </form>
      </div>
    </div>
  );
};

export default Registration;
