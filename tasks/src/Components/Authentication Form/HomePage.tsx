import React from "react";

interface Iprops {
  info: boolean;
  method: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage: React.FC<Iprops> = ({ info, method }) => {
  const userLogout = () => {
    method(false);
    localStorage.setItem("isLogin", JSON.stringify(false));
  };
  return (
    <div className="text-center">
      <h1>Home-Page</h1>
      <button className="btn btn-warning" onClick={userLogout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
