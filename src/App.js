import React, { Component } from "react";
import "./App.css";
import "./components/layout/NewActivity";
import NewActivity from "./components/layout/NewActivity";
import DisplayActivity from "./components/layout/DisplayActivity";
import axios from "axios";

class App extends Component {
  render() {
    const { activityName } = this.state;
    return (
      <div className="App">
        <h1>Hello</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <DisplayActivity />
              <h1>{activityName}</h1>
              <NewActivity />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      activityName: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then(response => {
        this.setState({ activityName: response.data.activity });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default App;
