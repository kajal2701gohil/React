import React from "react";
import Header from "./Header";
import TreeFolder from "./TreeFolder";

interface Iprops {
  method: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage: React.FC<Iprops> = ({ method }) => {
  const userLogout = () => {
    method(false);
    localStorage.setItem("isLogin", JSON.stringify(false));
    localStorage.removeItem("activeUser");
  };
  return (
    <div>
      <div>
        <div className="position-relative">
          {" "}
          <Header />
          <div className="text-end position-absolute top-0 end-0">
            {" "}
            <button className="btn btn-warning" onClick={userLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <TreeFolder />
    </div>
  );
};

export default HomePage;
