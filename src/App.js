import React, { Component } from "react";
import "./App.css";
import "./components/layout/NewActivity";
import NewActivity from "./components/layout/NewActivity";
import DisplayActivity from "./components/layout/DisplayActivity";
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <DisplayActivity />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <NewActivity />
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get('http://www.boredapi.com/api/activity/')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
}



export default App;
