import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const GridLayout = WidthProvider(RGL);
let pageLayout = [
  { i: "0", x: 0, y: 0, w: 6, h: 6, static: true },
  { i: "1", x: 6, y: 0, w: 6, h: 6, static: true },
  { i: "2", x: 0, y: 6, w: 6, h: 6, static: true },
  { i: "3", x: 6, y: 6, w: 6, h: 6, static: true }
];
const style = {
  border: "1px solid black"
};

const demostyle = {
  border: "1px dotted black"
};

const LayoutDemo = ({ layout }) => (
  <GridLayout cols={12} rowHeight={12} layout={layout}>
    {layout.map(item => (
      <div style={demostyle} key={item.i} />
    ))}
  </GridLayout>
);

class LayoutSelector extends React.Component {
  render() {
    const { layouts, onClick } = this.props;
    return (
      <GridLayout
        compactType="horizontal"
        layout={pageLayout}
        cols={12}
        rowHeight={60}
      >
        {pageLayout.map((layout, i) => (
          <div
            onClick={() => onClick(layouts[i])}
            style={style}
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
export default LayoutSelector;
