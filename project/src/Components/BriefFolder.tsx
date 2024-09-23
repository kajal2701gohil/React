import React from "react";
interface Folder {
  key: string;
  label: string;
  children?: Folder[];
  parentKey: string | null;
  type?: string;
}

interface Iprops {
  target: Folder | null;
}

interface File {
  fileName: string;
  parentKey: string;
}

const BriefFolder: React.FC<Iprops> = ({ target }) => {
  const folders: Folder[] | undefined = target?.children;
  const activeUserData = JSON.parse(localStorage.getItem("activeUser") || "{}");
  const documents: File[] = activeUserData.docData?.filter(
    (docs: File) => docs.parentKey === target?.key
  );

  return (
    <>
      {documents && documents.length > 0 ? (
        <div className="grid">
          {documents?.map((doc: File, i: number) => {
            return (
              <div className="font-bold text-center mx-2" key={i}>
                <i className="pi  pi-file" style={{ fontSize: "5rem" }}></i>
                <h5 className="mt-0">{doc.fileName}</h5>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid">
          {folders?.map((folder: Folder, i: number) => {
            return (
              <div className="font-bold text-center m-2" key={i}>
                <i
                  className="pi  pi-folder-open"
                  style={{ fontSize: "5rem" }}
                ></i>
                <h5 className="mt-0">{folder.label}</h5>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BriefFolder;
