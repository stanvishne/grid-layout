import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducers";
import LayoutSelector from "./components/layoutSelector/LayoutSelector";

import Layout from "./components/layoutPreview/Layout";
import "../node_modules/react-grid-layout/css/styles.css";
import "./stylesheets/App.scss";

const store = createStore(
  rootReducer /* preloadedState, */,
  window.devToolsExtension ? window.devToolsExtension() : {}
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">REACT GRID LAYOUT DEMO</h1>
            </header>
            <div className="App-main">
              <Route exact path="/" component={LayoutSelector} />
              <Route exact path="/layout/:id" component={Layout} />
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
