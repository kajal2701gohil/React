import React from "react";
import Header from "./Header";
import TreeFolder from "./TreeFolder";

interface Iprops {
  info: boolean;
  method: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage: React.FC<Iprops> = ({ info, method }) => {
  const userLogout = () => {
    method(false);
    localStorage.setItem("isLogin", JSON.stringify(false));
    localStorage.removeItem("activeUser");
  };
  return (
    <div>
      <Header />
      <div className="text-end">
        {" "}
        <button className="btn btn-warning" onClick={userLogout}>
          Logout
        </button>
      </div>
      <TreeFolder />
    </div>
  );
};

export default HomePage;
