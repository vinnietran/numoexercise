import React, { Component } from "react";

export class CustomSearch extends Component {
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group"></div>
      </div>
    );
  }
}

export default CustomSearch;
