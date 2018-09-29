import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const EnhancedButton = withStyles(styles)(({ classes, ...props }) => (
  <Button
    variant="fab"
    color="primary"
    aria-label="Add"
    className={classes.button}
    {...props}
  >
    <AddIcon />
  </Button>
));

export default EnhancedButton;
