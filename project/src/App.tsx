import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Registration from "./Components/Registration";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

const AuthenticationForm: React.FC = () => {
  const [isUser, setIsUser] = useState<boolean>(
    JSON.parse(localStorage.getItem("isLogin") || "false")
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!isUser ? (
            <>
              <Route
                path="/"
                Component={() => <Login method={setIsUser} />}
              ></Route>
              <Route
                path="*"
                Component={() => <Login method={setIsUser} />}
              ></Route>
              <Route
                path="/login"
                Component={() => <Login method={setIsUser} />}
              ></Route>
              <Route path="/registration" Component={Registration}></Route>
            </>
          ) : (
            <>
              <Route
                path="/home"
                Component={() => <HomePage method={setIsUser} />}
              />
              <Route
                path="/"
                Component={() => <HomePage method={setIsUser} />}
              />
              <Route
                path="*"
                Component={() => <HomePage method={setIsUser} />}
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthenticationForm;
