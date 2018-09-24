import React from "react";
import { withRouter } from "react-router-dom";
import { layouts } from "./layoutsConstants";
import LayoutSelector from "../LayoutSelector";

class Home extends React.Component {
  handleClick = (layout, id) => {
    this.props.history.push(`/layout/${id}`);
  };
  render() {
    return (
      <div>
        <LayoutSelector layouts={layouts} onClick={this.handleClick} />
      </div>
    );
  }
}

export default withRouter(Home);
