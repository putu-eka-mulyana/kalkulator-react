import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    value: PropTypes.string,
    onPress: PropTypes.func,
    class: PropTypes.string,
  };

  render() {
    return (
      <input
        type="button"
        value={this.props.value}
        onClick={this.props.onPress}
        className={this.props.class}
      />
    );
  }
}
