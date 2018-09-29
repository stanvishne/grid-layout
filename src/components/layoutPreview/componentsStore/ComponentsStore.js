import React from "react";
import Button from "./components/Button";
import TextField from "./components/TextField";
import Switch from "./components/Switch";
import Chip from "./components/Chip";
import { mapperValues } from "./componentsMapper";

class ComponentsStore extends React.Component {
  onDagStart(e, name) {
    e.dataTransfer.setData("text", name);
  }
  render() {
    return (
      <div>
        <Button
          onDragStart={e => this.onDagStart(e, mapperValues.BUTTON)}
          draggable
        />
        <TextField
          onDragStart={e => this.onDagStart(e, mapperValues.TEXT_FIELD)}
          draggable
        />
        <Switch
          onDragStart={e => this.onDagStart(e, mapperValues.SWITCH)}
          draggable
        />
        <Chip
          onDragStart={e => this.onDagStart(e, mapperValues.CHIP)}
          draggable
        />
      </div>
    );
  }
}

export default ComponentsStore;
