import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AuthenticationForm: React.FC = () => {
  return (
    <div>
      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="*" Component={Login}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/registration" Component={Registration}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthenticationForm;
