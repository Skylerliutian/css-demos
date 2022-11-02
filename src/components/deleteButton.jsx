import React, { useState } from "react";

import Delete from "./static/delete.svg";
import Paper from "./static/paper.svg";
import Check from "./static/check.svg";
import EmptyTrash from "./static/empty-trash.svg";

import "./deleteButton.css";

const DeleteButton = () => {
  const [isDelete, setIsDelete] = useState(false);
  const onClick = () => {
    setIsDelete(true);
    setTimeout(() => {
      setIsDelete(false);
      document.styleSheets[0].addRule(".check", "opacity: 0");
    }, 3000);
  };
  return (
    <div className={`btn ${isDelete ? "delete" : ""}`} onClick={onClick}>
      {!isDelete ? (
        <img src={Delete} alt=""></img>
      ) : (
        <img src={EmptyTrash} alt=""></img>
      )}
      <span>Delete Item</span>
      <img className="paper" src={Paper} alt=""></img>
      <img className="check" src={Check} alt=""></img>
    </div>
  );
};

export default DeleteButton;
