import React, { ChangeEvent, MouseEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

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
      let profile = e.target.files;

      let profileImage = await toBase64(profile);
      setObj((prevData) => ({ ...prevData, [e.target.id]: profileImage }));
    } else {
      setObj((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
    }
  };

  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const addUser = (e: MouseEvent<HTMLButtonElement>): void => {
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
    <div className="border border-4 border-white shadow-lg w-25 position-absolute top-50 start-50 translate-middle p-4">
      <form>
        <h1>Registration</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            onChange={(e) => handleChange(e)}
          />
          {errname && <span className="text-danger">{errname}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            onChange={(e) => handleChange(e)}
          />
          {errEmail && <span className="text-danger">{errEmail}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            required
            id="password"
            onChange={(e) => handleChange(e)}
          />
          {errPassword && <span className="text-danger">{errPassword}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="profile">
            Profile
          </label>
          <input
            className="form-control"
            type="file"
            required
            id="profile"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => addUser(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
