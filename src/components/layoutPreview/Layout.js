import React from "react";
import { connect } from "react-redux";
import RGL, { WidthProvider } from "react-grid-layout";

import ComponentsStore from "./componentsStore/ComponentsStore";
import DeleteBtn from "./DeleteBtn";
import { mapper } from "./componentsStore/componentsMapper";
import { layouts } from "../layoutsConstants";

const GridLayout = WidthProvider(RGL);

let pageLayout = [
  { i: "p", x: 0, y: 1, w: 2, h: 9, static: true },
  { i: "l", x: 3, y: 0, w: 8, h: 10, static: true }
];

function mapStateToProps({ layout }) {
  return { layout };
}

class Layout extends React.Component {
  state = {
    arr: []
  };

  onDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  };
  deleteComponent(index) {
    const prevArr = this.state.arr;
    prevArr[index] = null;
    this.setState({ arr: prevArr });
  }
  onDrop(e, gridIndex) {
    const name = e.dataTransfer.getData("text");

    const Comp = mapper[name];
    const ar = this.state.arr;
    ar[gridIndex] = <Comp />;
    this.setState({
      arr: ar
    });
  }

  render() {
    const { match } = this.props;
    const layout = layouts[match.params.id];

    return (
      <GridLayout
        className="layout-preview"
        layout={pageLayout}
        cols={12}
        rowHeight={60}
      >
        <div key="p" className="vertical-panel">
          componets store
          <ComponentsStore />
        </div>
        <div key="l">
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
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
                {this.state.arr[item.i] && (
                  <DeleteBtn onClick={() => this.deleteComponent(item.i)} />
                )}
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
