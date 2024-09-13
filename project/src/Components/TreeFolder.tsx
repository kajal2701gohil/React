import React, { ChangeEvent, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tree } from "primereact/tree";

interface Obj {
  key: string;
  label: string;
  children?: [];
  parentKey: string;
}

const TreeFolder: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  let [iconVisible, setIconVisible] = useState<boolean>(false);
  let [dialogue, setDialogue] = useState<string>("");
  const [folders, setFolders] = useState<{}[]>([]);
  const [selectedKey, setSelectedKey] = useState<Obj>({
    key: "",
    label: "",
    children: [],
    parentKey: "",
  });

  const [changeFolderKey, setChangeFolderKey] = useState<Obj>({
    key: "",
    label: "",
    children: [],
    parentKey: "",
  });

  const nodeTemplate = (node: any) => {
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
              <i
                className="pi pi-file-edit mx-4"
                onClick={() => {
                  setVisible(true);
                  setDialogue("edit");
                  setSelectedKey(node);
                }}
              ></i>
              <i
                className="pi pi-plus"
                onClick={() => {
                  setVisible(true);
                  setDialogue("children");
                  setSelectedKey(node);
                }}
              ></i>
            </>
          )}
        </span>
      </>
    );

    return <span>{label}</span>;
  };

  const checkDialogue = (): void => {
    if (value !== "") {
      const newFolder: Obj = {
        key: Date.now().toString(),
        label: value,
        children: [],
        parentKey: selectedKey.key,
      };

      if (dialogue === "children") {
        addSubFolder(newFolder, selectedKey);
      }
      if (dialogue === "category") {
        addMainFolder(newFolder);
      }
      if (dialogue === "edit") {
        editFolder();
      }
      setValue("");
    }
  };

  const editFolder = (): void => {
    selectedKey.label = value;
    setSelectedKey(selectedKey);
    removeFolder(selectedKey);
    addSubFolder(selectedKey, changeFolderKey);
  };

  const addSubFolder = (newFolder: Obj, key: Obj): void => {
    const updateFolder = (node: any): void => {
      if (node.key === key.key) {
        node.children = node.children || [];
        node.children.push(newFolder);
      } else if (node.children) {
        node.children.map(updateFolder);
      }
    };

    const updatedFolders: {}[] = [...folders];
    updatedFolders.map(updateFolder);
    setFolders(updatedFolders);
    setChangeFolderKey({ key: "", label: "", children: [], parentKey: "" });
  };

  const addMainFolder = (newFolder: Obj): void => {
    setFolders([...folders, newFolder]);
  };
  const selectionId = (e: any): void => {
    setChangeFolderKey(e.node);
  };

  const removeFolder = (selectedFolder: Obj): void => {
    if (selectedFolder.parentKey === "") {
      let index: number = folders.findIndex(
        (x: any) => x.key === selectedFolder.key
      );
      folders.splice(index, 1);
    } else {
      const updateFolder = (node: any): void => {
        if (node.key === selectedFolder.parentKey) {
          let index: number = node.children.findIndex(
            (x: Obj) => x.key === selectedFolder.key
          );
          node.children.splice(index, 1);
        } else if (node.children) {
          node.children.map(updateFolder);
        }
      };
      const updatedFolders: {}[] = [...folders];
      updatedFolders.map(updateFolder);
      setFolders(updatedFolders);
    }
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
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  setValue(e.target.value)
                }
              ></InputText>
            </div>

            {dialogue === "edit" && (
              <div className="inline-flex flex-column gap-2">
                <label className="text-primary-50 font-semibold">
                  PlacedFolder
                </label>
                <Tree
                  value={folders}
                  selectionMode="single"
                  className="w-full md:w-30rem"
                  onNodeClick={(e): void => selectionId(e)}
                />
              </div>
            )}

            <div className="flex align-items-center gap-2">
              <Button
                label="Add"
                name="category"
                onClick={(): void => checkDialogue()}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
              <Button
                label="Close"
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ): void => hide(e)}
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
