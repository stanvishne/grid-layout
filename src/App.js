import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import logo from "./logo.svg";
import "../node_modules/react-grid-layout/css/styles.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React!</h1>
          </header>
          <div className="App-main">
            <Route exact path="/" component={Home} />
            <Route exact path="/layout" component={Layout} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
