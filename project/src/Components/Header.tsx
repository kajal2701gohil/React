import React, { ChangeEvent, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const Header: React.FC = () => {
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser") || "{}")
  );

  const data = JSON.parse(localStorage.getItem("users") || "[]");

  const [visible, setVisible] = useState(false);

  const [editData, setEditData] = useState({ name: "", email: "", id: null });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const saveEditData = () => {
    editData.id = activeUser.id;
    setActiveUser(editData);
    localStorage.setItem("activeUser", JSON.stringify(editData));
    data[activeUser.id].name = editData?.name;
    data[activeUser.id].email = editData?.email;
    localStorage.setItem("users", JSON.stringify(data));
  };

  return (
    <div className="border border-2 p-3 text-end">
      <img
        alt=""
        className="border border-2 rounded-circle"
        width={50}
        height={50}
      />
      <span className="mx-3 fs-5 text-decoration-underline">
        {activeUser.name}
      </span>

      <Button label="Edit" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        modal
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        content={({ hide }) => (
          <div
            className="flex flex-column px-8 py-5 gap-4"
            style={{
              borderRadius: "12px",
              backgroundImage:
                "radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
            }}
          >
            <div className="inline-flex flex-column gap-2">
              <label
                htmlFor="username"
                className="text-primary-50 font-semibold"
              >
                Username
              </label>
              <InputText
                id="name"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                onChange={(e): void => handleChange(e)}
              ></InputText>
            </div>

            <div className="inline-flex flex-column gap-2">
              <label htmlFor="email" className="text-primary-50 font-semibold">
                Email
              </label>
              <InputText
                id="email"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                type="email"
                onChange={(e): void => handleChange(e)}
              ></InputText>
            </div>

            <div className="inline-flex flex-column gap-2">
              <label
                htmlFor="profile"
                className="text-primary-50 font-semibold"
              >
                Profile
              </label>
              <InputText
                id="profile"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                type="file"
              ></InputText>
            </div>

            <div className="flex align-items-center gap-2">
              <Button
                label="Save"
                onClick={saveEditData}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
              <Button
                label="Close"
                onClick={(e) => hide(e)}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
            </div>
          </div>
        )}
      ></Dialog>
    </div>
  );
};

export default Header;
