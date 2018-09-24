import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
const GridLayout = WidthProvider(RGL);
import { layouts } from "./layoutsConstants";
const LayoutPreview = ({ layout, onClick }) => {
  const handleClick = () => onClick(layout);
  return (
    <div onClick={handleClick} className="layout-example">
      <GridLayout
        className="layout"
        onLayoutChange={this.onLayoutChange}
        layout={layout}
        cols={12}
        rowHeight={30}
      >
        {layout.map(item => (
          <div className="layout-element" key={item.i} />
        ))}
      </GridLayout>
    </div>
  );
};

export default LayoutPreview;
