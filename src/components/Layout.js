import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import ComponentsStore from "./ComponentsStore";
import { mapper } from "./ComponentsStore";
const GridLayout = WidthProvider(RGL);

let layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
  { i: "b", x: 2, y: 0, w: 6, h: 2 },
  { i: "c", x: 8, y: 0, w: 4, h: 2, static: true }
];
let globalLayout = [
  { i: "p", x: 0, y: 0, w: 2, h: 10, static: true },
  { i: "l", x: 2, y: 0, w: 10, h: 10, static: true }
];
class Layout extends React.Component {
  state = {
    DropedElement: null,
    arr: []
  };
  onLayoutChange = layout => {
    //this.props.onLayoutChange(layout);
    console.log(layout);
  };
  onDragOver = e => {
    //let event = e as Event;
    e.stopPropagation();
    e.preventDefault();
  };

  onDrop(e, gridIndex) {
    const name = e.dataTransfer.getData("text");
    console.log(name);
    const Comp = mapper[name];
    const ar = this.state.arr;
    ar[gridIndex] = <Comp />;
    this.setState({
      arr: ar
    });

    // Do something with the data
    // console.log(data);
  }

  render() {
    return (
      <GridLayout layout={globalLayout} cols={12} rowHeight={60}>
        <div key="p" className="vertical-panel">
          componets store
          <ComponentsStore />
        </div>
        <div key="l">
          <GridLayout
            className="layout"
            onLayoutChange={this.onLayoutChange}
            layout={layout}
            cols={12}
            rowHeight={60}
          >
            {layout.map(item => (
              <div
                onDragOver={this.onDragOver}
                onDrop={e => {
                  this.onDrop(e, item.i);
                }}
                className="layout-element"
                key={item.i}
              >
                {this.state.arr[item.i]}
              </div>
            ))}
          </GridLayout>
        </div>
      </GridLayout>
    );
  }
}

export default Layout;
