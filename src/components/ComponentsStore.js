import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

const ButtonForExport = withStyles(styles)(({ classes }) => (
  <Button
    variant="fab"
    color="primary"
    aria-label="Add"
    className={classes.button}
  >
    <AddIcon />
  </Button>
));

export const mapper = {
  Button: ButtonForExport
};

export const mapperValues = {
  BUTTON: "Button"
};

class ComponentsStore extends React.Component {
  onDagStart(e, name) {
    e.dataTransfer.setData("text", name);
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          onDragStart={e => this.onDagStart(e, mapperValues.BUTTON)}
          draggable
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
        >
          <AddIcon />
        </Button>
        <Button
          variant="fab"
          color="secondary"
          aria-label="Edit"
          className={classes.button}
        >
          <Icon>edit_icon</Icon>
        </Button>
        <Button
          variant="extendedFab"
          aria-label="Delete"
          className={classes.button}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Button>
        <Button variant="fab" aria-label="Delete" className={classes.button}>
          <DeleteIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ComponentsStore);
