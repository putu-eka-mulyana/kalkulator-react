import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Results extends Component {
  static propTypes = {
    result: PropTypes.string,
  };

  render() {
    return (
      <div class="box-result">
        <p id="result">{this.props.result}</p>
      </div>
    );
  }
}
