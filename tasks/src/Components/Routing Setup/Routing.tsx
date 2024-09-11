import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Logout from "./Logout";
import Error from "./Error";

const Routing: React.FC = () => {
  const [isLogin, setIsLogin] = useState([false]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" Component={Login}></Route>
              <Route path="/login" Component={Login}></Route>
              <Route path="*" Component={Error}></Route>
            </>
          ) : (
            <>
              <Route path="/home" Component={Home}></Route>
              <Route path="/logout" Component={Logout}></Route>
              <Route path="/" Component={Home}></Route>
              <Route path="*" Component={Error}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
