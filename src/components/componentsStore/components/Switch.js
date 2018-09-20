import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default props => (
  <FormControlLabel
    {...props}
    control={<Switch value="checkedC" />}
    label="turn On"
  />
);
