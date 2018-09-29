import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteBtn = ({ onClick }) => (
  <div onClick={onClick} className="delete-btn" v>
    <IconButton aria-label="Delete">
      <DeleteIcon fontSize="small" />
    </IconButton>
  </div>
);

export default DeleteBtn;
