import React from "react";
import toggleImg from "./../images/toggle.png";

const ToggleImg: React.FC = () => {
  return (
    <>
      <img src={toggleImg} alt="toggle-image" className="img-fluid" />
    </>
  );
};

export default ToggleImg;
