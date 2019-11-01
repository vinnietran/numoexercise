import React, { Component } from "react";

export class NewActivity extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getActive} type="button" class="btn btn-success">
          Sounds awful, give me something new!
        </button>
      </div>
    );
  }

  getActive() {
    window.location.reload(false);
  }
}

export default NewActivity;
