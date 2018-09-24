import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { layouts } from "./layoutsConstants";
//import LayoutPreview from "./LayoutPreview";
import LayoutSelector from "../LayoutSelector";

function mapDispatchToProps(dispatch) {
  return {
    onLayouSelect: layout => dispatch({ type: "SET_LAYOUT", payload: layout })
  };
}

class Home extends React.Component {
  handleClick = layout => {
    this.props.onLayouSelect(layout);
    this.props.history.push("/layout");
  };
  render() {
    return (
      <div>
        {/*layouts.map((layout, i) => (
          <LayoutPreview
            key={`ly-${i}`}
            onClick={() => this.handleClick(layout)}
            layout={layout}
          />
        ))*/}
        <LayoutSelector layouts={layouts} onClick={this.handleClick} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Home));
