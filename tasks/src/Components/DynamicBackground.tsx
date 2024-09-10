import React from "react";

const DynamicBackground: React.FC = () => {
  const changeBg = (): void => {
    const red: number = getRandom();
    const green: number = getRandom();
    const blue: number = getRandom();
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };

  const getRandom = (): number => {
    return Math.floor(Math.random() * 255);
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <button onClick={changeBg} className="btn btn-info">
        Change background
      </button>
    </div>
  );
};

export default DynamicBackground;
