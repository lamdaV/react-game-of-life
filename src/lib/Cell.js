"use strict";

var React = require("react");

var LENGTH = 20;

var Cell = React.createClass({
  displayName: "Cell",

  /*
    Define prop types.
  */
  propTypes: {
    status: React.PropTypes.bool.isRequired,
    row: React.PropTypes.number.isRequired,
    col: React.PropTypes.number.isRequired,
    lineColor: React.PropTypes.string.isRequired,
    cellActiveColor: React.PropTypes.string.isRequired,
    cellInActiveColor: React.PropTypes.string.isRequired
  },

  /*
    Render the component.
  */
  render: function render() {
    var fillColor = this.props.status ? this.props.cellActiveColor : this.props.cellInActiveColor;

    return React.createElement("rect", { width: LENGTH, height: LENGTH, x: LENGTH * this.props.row, y: LENGTH * this.props.col, fill: fillColor, stroke: this.props.lineColor, strokeWidth: "1" });
  }
});

module.exports = Cell;