import React, { ChangeEvent, useState } from "react";
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

interface Iprops {
  folders: Folder[];
}

interface File {
  fileName: string;
  parentKey: string;
}

const DocumentBtn: React.FC<Iprops> = ({ folders }) => {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [file, setFile] = useState<{ name: string; type: string }>({
    name: "",
    type: "",
  });
  const [selectFolder, setSelectFolder] = useState<string | null>(null);

  const activeUser = JSON.parse(localStorage.getItem("activeUser") || "{}");

  const [allDocList, setAllDocList] = useState<File[]>(
    activeUser.docData || []
  );

  const data = JSON.parse(localStorage.getItem("users") || "[]");

  const handleDialogClose = (): void => {
    setDialogVisible(false);
  };

  const handleDocData = (): void => {
    if (file && selectFolder) {
      const newFile: File = {
        fileName: `${file.name}.${file.type}`,
        parentKey: selectFolder,
      };

      allDocList.push(newFile);
      setAllDocList([...allDocList]);
      setFile({ ...file, name: "", type: "" });
      handleDialogClose();
      activeUser.docData = allDocList;
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
      data.splice(activeUser.id, 1, activeUser);
      localStorage.setItem("users", JSON.stringify(data));
    }
  };

  return (
    <div className="my-3">
      <Button
        label="Document"
        icon="pi pi-file-plus"
        severity="danger"
        onClick={(): void => setDialogVisible(true)}
      />
      <Dialog visible={dialogVisible} onHide={handleDialogClose}>
        <div
          className="flex flex-column px-8 py-5 gap-4"
          style={{
            borderRadius: "12px",
            backgroundColor: "gray",
          }}
        >
          <div className="inline-flex flex-column gap-2">
            <label htmlFor="doc" className="text-primary-50 font-semibold">
              Document Name
            </label>
            <InputText
              id="doc"
              className="bg-white-alpha-20 border-none p-3 text-primary-50"
              value={file.name}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setFile({ ...file, name: e.target.value })
              }
            />
          </div>

          <div className="inline-flex flex-column gap-2">
            <label htmlFor="type" className="text-primary-50 font-semibold">
              File Type
            </label>
            <InputText
              id="type"
              className="bg-white-alpha-20 border-none p-3 text-primary-50"
              value={file.type}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setFile({ ...file, type: e.target.value })
              }
            />
          </div>

          <div className="inline-flex flex-column gap-2">
            <label className="text-primary-50 font-semibold">
              PlacedFolder
            </label>
            <Tree
              value={folders}
              selectionMode="single"
              className="w-full md:w-30rem"
              onNodeClick={(e): void =>
                setSelectFolder(e.node.key as string | null)
              }
            />
          </div>

          <div className="flex align-items-center gap-2">
            <Button
              label="Add"
              onClick={handleDocData}
              text
              className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            />
            <Button
              label="Close"
              onClick={handleDialogClose}
              text
              className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 "
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DocumentBtn;
