import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const EnhancedTextField = ({ classes, ...props }) => (
  <TextField
    label="Text field"
    defaultValue="foo"
    className={classes.textField}
    margin="normal"
    variant="filled"
    {...props}
  />
);

export default withStyles(styles)(EnhancedTextField);
