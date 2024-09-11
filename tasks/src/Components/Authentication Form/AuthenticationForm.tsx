import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

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
                Component={() => <Login info={isUser} method={setIsUser} />}
              ></Route>
              <Route
                path="*"
                Component={() => <Login info={isUser} method={setIsUser} />}
              ></Route>
              <Route
                path="/login"
                Component={() => <Login info={isUser} method={setIsUser} />}
              ></Route>
              <Route path="/registration" Component={Registration}></Route>
            </>
          ) : (
            <>
              <Route
                path="/home"
                Component={() => <HomePage info={isUser} method={setIsUser} />}
              />
              <Route
                path="/"
                Component={() => <HomePage info={isUser} method={setIsUser} />}
              />
              <Route
                path="*"
                Component={() => <HomePage info={isUser} method={setIsUser} />}
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthenticationForm;
