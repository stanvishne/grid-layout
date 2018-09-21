import React from "react";
import { connect } from "react-redux";
import RGL, { WidthProvider } from "react-grid-layout";
import ComponentsStore from "./componentsStore/ComponentsStore";
import { mapper } from "./componentsStore/componentsMapper";

const GridLayout = WidthProvider(RGL);

let pageLayout = [
  { i: "p", x: 0, y: 0, w: 2, h: 10, static: true },
  { i: "l", x: 2, y: 0, w: 10, h: 10, static: true }
];

function mapStateToProps({ layout }) {
  return { layout };
}

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
  }

  render() {
    const { layout } = this.props;
    return (
      <GridLayout layout={pageLayout} cols={12} rowHeight={60}>
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

export default connect(
  mapStateToProps,
  null
)(Layout);
