import React, { Component } from "react";
import axios from "axios";

export class DisplayActivity extends Component {
  render() {
    const { activityName } = this.state;
    return (
      <div>
        <h1>{activityName}</h1>
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

export default DisplayActivity;
