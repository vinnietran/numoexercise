import React, { Component } from "react";
import "./App.css";
import "./components/layout/NewActivity";
import NewActivity from "./components/layout/NewActivity";
import DisplayActivity from "./components/layout/DisplayActivity";
import Instructions from "./components/layout/Instructions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <br />
            <br />
            <br />
          </div>
          <div className="row">
            <Instructions />
          </div>
          <div className="row">
            <br />
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-md-12">
              <DisplayActivity />
            </div>
          </div>
          <div className="row">
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-md-12">
              <NewActivity />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
