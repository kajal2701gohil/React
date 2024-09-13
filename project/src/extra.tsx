import React, { useRef, useState } from "react";
import "./App.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Tree } from "primereact/tree";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

function App() {
  const [value, setValue] = useState("");
  const toast = useRef(null);
  const [nodes, setNodes] = useState([
    {
      key: "0",
      label: "Documents",
      data: "Documents Folder",
      icon: "pi pi-fw pi-inbox",
      children: [
        {
          key: "0-0",
          label: "Work",
          data: "Work Folder",
          // icon: "pi pi-fw pi-cog",
          children: [
            {
              key: "0-0-0",
              label: "Expenses.doc",
              // icon: "pi pi-fw pi-file",
              data: "Expenses Document",
            },
            {
              key: "0-0-1",
              label: "Resume.doc",
              // icon: "pi pi-fw pi-file",
              data: "Resume Document",
            },
          ],
        },
        {
          key: "0-1",
          label: "Home",
          data: "Home Folder",
          // icon: "pi pi-fw pi-home",
          children: [
            {
              key: "0-1-0",
              label: "Invoices.txt",
              // icon: "pi pi-fw pi-file",
              data: "Invoices for this month",
            },
          ],
        },
      ],
    },
  ]);

  const onSelect = (event: any) => {
    console.log(event);
  };
  const [visible, setVisible] = useState(false);
  const addNew = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // hide(e);
    let k = {
      key: "0",
      label: value,
      data: value + " Folder",
      // icon: "pi pi-fw pi-inbox",
      children: ["work"],
    };
    // nodes.push(k);
    setNodes(nodes);
    console.log(nodes);
  };
  return (
    <div className="App">
      <Toast ref={toast} />
      <div className="card flex justify-content-center">
        <Tree
          value={nodes}
          selectionMode="single"
          // onSelect={onSelect}
          className="w-full md:w-30rem"
        />
      </div>
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
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
                id="username"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></InputText>
            </div>

            <div className="flex align-items-center gap-2">
              <Button
                label="Sign-In"
                onClick={(e) => addNew(e)}
                // onClick={(e) => hide(e)}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
              <Button
                label="Cancel"
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
}

export default App;
