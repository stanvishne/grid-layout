import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
const GridLayout = WidthProvider(RGL);

const LayoutDemo = ({ layout }) => (
  <GridLayout cols={12} rowHeight={12} layout={layout}>
    {layout.map(item => (
      <div className="layout-demo-item" key={item.i} />
    ))}
  </GridLayout>
);

export default LayoutDemo;
