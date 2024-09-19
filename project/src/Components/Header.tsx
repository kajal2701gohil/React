import React, { ChangeEvent, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";

interface Iprops {
  method: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Iprops> = ({ method }) => {
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser") || "{}")
  );
  const data = JSON.parse(localStorage.getItem("users") || "[]");
  const [visible, setVisible] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    id: null,
    profile: "",
  });

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "profile") {
      let profile = e.target.files;

      let profileImage = await toBase64(profile);
      setEditData((prevData) => ({ ...prevData, [e.target.id]: profileImage }));
    } else {
      setEditData((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const saveEditData = () => {
    editData.id = activeUser.id;
    setActiveUser(editData);
    localStorage.setItem("activeUser", JSON.stringify(editData));
    data[activeUser.id].name = editData?.name;
    data[activeUser.id].email = editData?.email;
    data[activeUser.id].profile = editData?.profile;
    localStorage.setItem("users", JSON.stringify(data));
  };

  const userLogout = () => {
    method(false);
    localStorage.setItem("isLogin", JSON.stringify(false));
    localStorage.removeItem("activeUser");
  };
  const end = (
    <div className="flex justify-content-between align-items-center">
      <Avatar
        image={activeUser.profile}
        shape="circle"
        className="mx-1"
        size="large"
      />{" "}
      <span>{activeUser.name}</span>
      <Button
        icon="pi pi-user-edit"
        className="mx-3 border-0"
        severity="secondary"
        rounded
        text
        raised
        onClick={() => setVisible(true)}
      />
      <Button
        icon="pi pi-sign-out"
        className="border-0"
        severity="secondary"
        rounded
        text
        raised
        onClick={userLogout}
      />
    </div>
  );
  return (
    <div>
      <Menubar end={end} className="p-3 bg-gray-100" />

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
              backgroundColor: "gray",
            }}
          >
            <div className="inline-flex flex-column gap-2">
              <label htmlFor="name" className="text-primary-50 font-semibold">
                Username
              </label>
              <InputText
                id="name"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
              ></InputText>
            </div>

            <div className="flex align-items-center gap-2">
              <Button
                label="Save"
                text
                onClick={saveEditData}
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
              <Button
                label="Close"
                text
                onClick={(e) => hide(e)}
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
