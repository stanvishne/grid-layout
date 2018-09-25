import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducers";
import Home from "./components/Home";
// import Home from "./LayoutSelector";

import Layout from "./components/Layout";
//import logo from "./logo.svg";
import "../node_modules/react-grid-layout/css/styles.css";
import "./App.css";

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
              <h1 className="App-title">React grid layout demo</h1>
            </header>
            <div className="App-main">
              <Route exact path="/" component={Home} />
              <Route exact path="/layout/:id" component={Layout} />
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
