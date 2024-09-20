import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tree } from "primereact/tree";
import DocumentBtn from "./DocumentBtn";
import BriefFolder from "./BriefFolder";

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
  const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
  const [targetNode, setTargetNode] = useState<Folder | null>(null);
  const [changeFolderKey, setChangeFolderKey] = useState<string | null>(null);
  const activeUser = JSON.parse(localStorage.getItem("activeUser") || "{}");
  const [originalFolders, setOriginalFolders] = useState<Folder[]>(
    activeUser.folderData || []
  );
  const data = JSON.parse(localStorage.getItem("users") || "[]");

  useEffect(() => {
    const buildTree = (lists: Folder[]): Folder[] => {
      const listData: { [key: string]: Folder } = {};
      const updatedList: Folder[] = [];

      lists?.forEach((x) => {
        listData[x.key] = { ...x, children: [] };
      });

      lists.forEach((item) => {
        const node: Folder = listData[item.key];
        if (item.parentKey !== null) {
          listData[item.parentKey]?.children?.push(node);
        } else {
          updatedList.push(node);
        }
      });
      return updatedList;
    };
    activeUser.folderData = originalFolders;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    data.splice(activeUser.id, 1, activeUser);
    localStorage.setItem("users", JSON.stringify(data));

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
    if (inputValue) {
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
        if (index >= 0) {
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
    }
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

  const onNodeClick = (event: any) => {
    setTargetNode({ ...event.node });
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
    <div className="flex w-full">
      <div className=" w-3">
        <Tree
          value={folders}
          selectionMode="single"
          className="w-full md:w-30rem m-2"
          nodeTemplate={nodeTemplate}
          onNodeClick={onNodeClick}
        />
        <Button
          label="Category"
          icon="pi pi-folder-plus"
          severity="success"
          onClick={() => handleDialogOpen("category", null)}
        />
        <DocumentBtn folders={folders} />
        <Dialog visible={dialogVisible} onHide={handleDialogClose}>
          <div
            className="flex flex-column px-8 py-5 gap-4 "
            style={{
              borderRadius: "12px",
              backgroundColor: "gray",
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
                className="bg-white-alpha-20 border-none p-3 text-white"
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
      <div className=" p-5">
        {targetNode !== null ? <BriefFolder target={targetNode} /> : ""}
      </div>
    </div>
  );
};

export default TreeFolder;
