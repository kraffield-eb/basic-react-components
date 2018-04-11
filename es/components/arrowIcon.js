var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import PropTypes from "prop-types";

import { propValidator } from "../helpers.js";

var POINTS_MAP = {
  right: [{ x1: "1", y1: "1", x2: "25", y2: "20" }, { x1: "1", y1: "40", x2: "25", y2: "20" }],
  left: [{ x1: "1", y1: "20", x2: "25", y2: "40" }, { x1: "1", y1: "20", x2: "25", y2: "1" }],
  up: [{ x1: "20", y1: "1", x2: "1", y2: "25" }, { x1: "20", y1: "1", x2: "40", y2: "25" }],
  down: [{ x1: "20", y1: "25", x2: "1", y2: "1" }, { x1: "20", y1: "25", x2: "40", y2: "1" }]
};

var ArrowIcon = function ArrowIcon(_ref) {
  var color = _ref.color,
      direction = _ref.direction,
      disabled = _ref.disabled,
      height = _ref.height,
      width = _ref.width,
      strokeWidth = _ref.strokeWidth,
      strokeOpacity = _ref.strokeOpacity,
      onClick = _ref.onClick;

  return React.createElement(
    "div",
    { className: "pointer w2 ma2 dim", onClick: onClick },
    React.createElement(
      "svg",
      {
        height: height,
        width: width,
        version: "1.1",
        xmlns: "http://www.w3.org/svg"
      },
      React.createElement("line", _extends({}, POINTS_MAP[direction][0], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      })),
      React.createElement("line", _extends({}, POINTS_MAP[direction][1], {
        stroke: color,
        strokeOpacity: strokeOpacity,
        strokeWidth: strokeWidth
      }))
    )
  );
};

ArrowIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  color: PropTypes.oneOf(["white", "black"]),
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(["right", "left", "up", "down"]).isRequired,
  height: propValidator.endsWithpx,
  width: propValidator.endsWithpx,
  strokeWidth: propValidator.endsWithpx,
  strokeOpacity: propValidator.isDecimal,
  onClick: PropTypes.func.isRequired
} : {};

ArrowIcon.defaultProps = {
  color: "white",
  disabled: false,
  height: "40px",
  width: "40px",
  strokeOpacity: "0.8",
  strokeWidth: "2px"
};

export default ArrowIcon;