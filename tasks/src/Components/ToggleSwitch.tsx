import React, { ChangeEvent, useState } from "react";
import ToggleImg from "./ToggleImg";

const ToggleSwitch: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className=" p-4 position-absolute top-50 start-50 translate-middle w-25 h-75">
      <h2>Toggle-Component</h2>
      <div className="form-check form-switch py-1">
        <label htmlFor="flexSwitchCheckDefault">
          Switch on to show the image
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setIsActive(e.target.checked)
          }
        />
      </div>
      {isActive && (
        <div className="container py-3">
          <ToggleImg />
        </div>
      )}
    </div>
  );
};

export default ToggleSwitch;
