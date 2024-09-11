import React from "react";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const FileUploader: React.FC = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle  p-5 bg-white rounded-3">
      <FileUpload
        name="demo[]"
        multiple
        accept="image/*"
        maxFileSize={1000000}
        emptyTemplate={
          <p className="m-0">Drag and drop files to here to upload.</p>
        }
      />
    </div>
  );
};

export default FileUploader;
