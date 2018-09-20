import React from "react";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

export default props => (
  <Chip
    icon={<FaceIcon />}
    label="Deletable Secondary Chip"
    onDelete={() => {
      alert("delete");
    }}
    color="secondary"
    {...props}
  />
);
