import React from "react";
import Header from "./Header";
import TreeFolder from "./TreeFolder";

interface Iprops {
  method: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage: React.FC<Iprops> = ({ method }) => {
  return (
    <>
      <Header method={method} />
      <TreeFolder />
    </>
  );
};

export default HomePage;
