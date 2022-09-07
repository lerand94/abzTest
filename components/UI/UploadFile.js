import classes from "./UploadFile.module.css";
import { useState } from "react";

const UploadFile = (props) => {
  const [label, setLabel] = useState("Upload your photo");

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file.size > 5000000) {
      console.log("big file");
      return;
    }
    setLabel(file.name.split(".")[0]);

    props.onFileUpload(file);
  };
  return (
    <div className={classes.file}>
      <input type="file" hidden={true} id="file" onChange={fileChangeHandler} />
      <label htmlFor="file">Choose File</label>
      <span>{label}</span>
    </div>
  );
};

export default UploadFile;
