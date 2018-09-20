import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { withRouter } from "react-router-dom";
const GridLayout = WidthProvider(RGL);

const layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
  { i: "b", x: 2, y: 0, w: 6, h: 2, static: true },
  { i: "c", x: 8, y: 0, w: 3, h: 2, static: true }
];

const layout2 = [
  { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
  { i: "b", x: 2, y: 0, w: 4, h: 2, static: true },
  { i: "c", x: 6, y: 0, w: 3, h: 2, static: true }
];

const layout3 = [
  { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
  { i: "b", x: 2, y: 0, w: 4, h: 4, static: true },
  { i: "c", x: 6, y: 0, w: 5, h: 2, static: true }
];

const LayoutExample = ({ layout, onClick }) => {
  const handleClick = () => onClick(layout);
  return (
    <div onClick={handleClick} className="layout-example">
      <GridLayout
        className="layout"
        onLayoutChange={this.onLayoutChange}
        layout={layout}
        cols={11}
        rowHeight={60}
      >
        {layout.map(item => (
          <div className="layout-element" key={item.i} />
        ))}
      </GridLayout>
    </div>
  );
};
class Home extends React.Component {
  handleClick = layout => {
    console.log(layout);
    this.props.history.push("/layout");
  };
  render() {
    return (
      <div>
        Home
        <LayoutExample onClick={this.handleClick} layout={layout} />
        <LayoutExample layout={layout2} />
        <LayoutExample layout={layout3} />
      </div>
    );
  }
}

export default withRouter(Home);
