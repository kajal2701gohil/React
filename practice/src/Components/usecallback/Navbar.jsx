import React, { memo } from "react";

const Navbar = ({ data, test }) => {
  console.log(data, "navbar....", test());
  return (
    <div>
      <h2>{test()}</h2>
    </div>
  );
};

export default memo(Navbar);
