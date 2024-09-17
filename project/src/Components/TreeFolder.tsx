import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tree } from "primereact/tree";

interface Folder {
  key: string;
  label: string;
  children?: Folder[];
  parentKey: string | null;
}

const TreeFolder: React.FC = () => {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [hoveredNodeKey, setHoveredNodeKey] = useState<string | null>(null);
  const [dialogType, setDialogType] = useState<string>("");
  const [folders, setFolders] = useState<Folder[]>([]);
  const [originalFolders, setOriginalFolders] = useState<Folder[]>([]);
  const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
  const [changeFolderKey, setChangeFolderKey] = useState<string | null>(null);

  useEffect(() => {
    const buildTree = (
      data: Folder[],
      parentKey: string | null = null
    ): Folder[] => {
      return data
        .filter((item) => item.parentKey === parentKey)
        .map((item) => ({
          ...item,
          children: buildTree(data, item.key),
        }));
    };

    setFolders(buildTree(originalFolders));
    setChangeFolderKey(null);
    setSelectedNodeKey(null);
  }, [originalFolders]);

  const handleNodeHover = (key: string | null) => {
    setHoveredNodeKey(key);
  };

  const handleDialogOpen = (type: string, key: string | null) => {
    setDialogVisible(true);
    setDialogType(type);
    setSelectedNodeKey(key);
  };

  const handleDialogClose = () => {
    setDialogVisible(false);
    setInputValue("");
  };

  const handleFolderUpdate = () => {
    if (!inputValue) return;

    const updatedFolders = [...originalFolders];
    const newFolder: Folder = {
      key: Date.now().toString(),
      label: inputValue,
      parentKey: selectedNodeKey || null,
    };

    if (dialogType === "edit" && selectedNodeKey) {
      const index = updatedFolders.findIndex(
        (folder) => folder.key === selectedNodeKey
      );
      if (index !== -1) {
        updatedFolders[index].label = inputValue;
        updateFolderHierarchy(
          updatedFolders[index],
          changeFolderKey,
          updatedFolders
        );
      }
    } else {
      updatedFolders.push(newFolder);
    }

    setOriginalFolders(updatedFolders);
    handleDialogClose();
  };

  const updateFolderHierarchy = (
    folder: Folder,
    newParentKey: string | null,
    allFolders: Folder[]
  ) => {
    folder.parentKey = newParentKey;
    allFolders
      .filter((child) => child.parentKey === folder.key)
      .forEach((child) => updateFolderHierarchy(child, folder.key, allFolders));
  };

  const nodeTemplate = (node: any) => (
    <span
      className="text-700 hover:text-primary"
      onMouseOver={() => handleNodeHover(node.key)}
      onMouseOut={() => handleNodeHover(null)}
    >
      <b>{node.label}</b>
      {hoveredNodeKey === node.key && (
        <>
          <i
            className="pi pi-file-edit mx-4"
            onClick={() => handleDialogOpen("edit", node.key)}
          ></i>
          <i
            className="pi pi-plus"
            onClick={() => handleDialogOpen("children", node.key)}
          ></i>
        </>
      )}
    </span>
  );

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
        onClick={() => handleDialogOpen("category", null)}
      />
      <Dialog visible={dialogVisible} modal onHide={handleDialogClose}>
        <div
          className="flex flex-column px-8 py-5 gap-4"
          style={{
            borderRadius: "12px",
            backgroundImage:
              "radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
          }}
        >
          <div className="inline-flex flex-column gap-2">
            <label htmlFor="category" className="text-primary-50 font-semibold">
              Category Name
            </label>
            <InputText
              id="category"
              className="bg-white-alpha-20 border-none p-3 text-primary-50"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
          </div>

          {dialogType === "edit" && (
            <div className="inline-flex flex-column gap-2">
              <label className="text-primary-50 font-semibold">
                PlacedFolder
              </label>
              <Tree
                value={folders}
                selectionMode="single"
                className="w-full md:w-30rem"
                onNodeClick={(e) =>
                  setChangeFolderKey(e.node.key as string | null)
                }
              />
            </div>
          )}

          <div className="flex align-items-center gap-2">
            <Button
              label="Add"
              onClick={handleFolderUpdate}
              text
              className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            />
            <Button
              label="Close"
              onClick={handleDialogClose}
              text
              className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TreeFolder;
