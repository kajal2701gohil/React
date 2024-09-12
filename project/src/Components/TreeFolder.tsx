import React, { Children, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tree } from "primereact/tree";

const TreeFolder: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  let [count, setCount] = useState(0);
  let [iconVisible, setIconVisible] = useState(false);
  let [dialogue, setDialogue] = useState("");
  let [key, setKey] = useState();

  const [folders, setFolders] = useState<{}[]>([
    // {
    //   label: "a",
    //   id: 1,
    //   children: [
    //     {
    //       label: "x",
    //       id: 1 - 1,
    //     },
    //   ],
    // },
    // {
    //   label: "b",
    //   id: 2,
    // },
  ]);

  const nodeTemplate = (node: any, options: any) => {
    let label = <b>{node.label}</b>;

    label = (
      <>
        <span
          className="text-700 hover:text-primary"
          rel="noopener noreferrer"
          onMouseOver={() => setIconVisible(true)}
          onMouseOut={() => setIconVisible(false)}
        >
          {node.label}
          {iconVisible && (
            <>
              {" "}
              <i className="pi pi-file-edit mx-4"></i>
              <i
                className="pi pi-plus"
                onClick={() => {
                  setVisible(true);
                  setDialogue("children");
                  setKey(node.id);
                }}
              ></i>
            </>
          )}
        </span>
      </>
    );

    return <span className={options.className}>{label}</span>;
  };

  const addChildren = () => {
    // console.log(value, key);
    let index = folders.findIndex((x: any) => x?.id === key);
    // console.log(folders[index]);
    let object: any = folders[index];
    console.log(object);
    object.children = [] || object.children;

    let obj = { label: "", id: "0" };
    obj.label = value;
    obj.id = `${index}-${object.children.length}`;
    // console.log(obj);
    object.children.push({ ...obj });
    // console.log(folders, object.children);
    setFolders([...folders]);
    setValue("");
  };

  const checkDialogue = () => {
    if (dialogue === "children") {
      addChildren();
    }
    if (dialogue === "category") {
      addNew();
    }
  };

  const addNew = () => {
    count++;
    setCount(count);
    let obj = { label: "", id: 0 };
    obj.label = value;
    obj.id = count;
    folders.push(obj);
    setFolders([...folders]);
    setValue("");
  };

  return (
    <div>
      <Tree
        value={folders}
        selectionMode="single"
        className="w-full md:w-30rem"
        nodeTemplate={nodeTemplate}
      />
      <Button
        label="Category"
        icon="pi pi-external-link"
        onClick={() => {
          setVisible(true);
          setDialogue("category");
        }}
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
                htmlFor="category"
                className="text-primary-50 font-semibold"
              >
                Category Name
              </label>
              <InputText
                id="category"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></InputText>
            </div>

            <div className="flex align-items-center gap-2">
              <Button
                label="Add"
                name="category"
                onClick={() => checkDialogue()}
                // onClick={() => addNew()}
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

export default TreeFolder;
