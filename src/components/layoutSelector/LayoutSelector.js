import React from "react";
import { withRouter } from "react-router-dom";
import RGL, { WidthProvider } from "react-grid-layout";
import LayoutDemo from "./LayoutDemo";
import { layouts } from "../layoutsConstants";

const GridLayout = WidthProvider(RGL);
const pageLayout = [
  { i: "0", x: 0, y: 0, w: 6, h: 6, static: true },
  { i: "1", x: 6, y: 0, w: 6, h: 6, static: true },
  { i: "2", x: 0, y: 6, w: 6, h: 6, static: true },
  { i: "3", x: 6, y: 6, w: 6, h: 6, static: true }
];

class LayoutSelector extends React.Component {
  handleClick = id => {
    this.props.history.push(`/layout/${id}`);
  };

  render() {
    return (
      <GridLayout
        compactType="horizontal"
        className="layout-selector"
        layout={pageLayout}
        cols={12}
        rowHeight={60}
      >
        {pageLayout.map((layout, i) => (
          <div
            onClick={() => this.handleClick(i)}
            className="layout-demo-div"
            key={layout.i}
          >
            <LayoutDemo layout={layouts[i]} />
          </div>
        ))}
      </GridLayout>
    );
  }
}
export default withRouter(LayoutSelector);
