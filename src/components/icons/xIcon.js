import React from "react";
import PropTypes from "prop-types";

import "../../thecss.css";

const XIcon = ({
  addContClasses,
  contClasses,
  animate,
  color,
  fill,
  strokeWidth,
  onClick
}) => (
  <svg
    xmlns="http://www.w3.org/svg"
    className={[
      ...contClasses,
      ...addContClasses,
      animate ? "spin-once-fast" : "",
      onClick ? "pointer" : ""
    ].join(" ")}
    viewBox="0 0 100 100"
    onClick={onClick}
  >
    <path
      className={animate ? "stroke-animate-fast" : ""}
      style={animate ? { strokeDasharray: 80 } : {}}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      d="M30 30 l20 20 20 -20"
    />
    <path
      className={animate && "stroke-animate-fast"}
      style={animate ? { strokeDasharray: 80 } : {}}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      d="M30 70 l20 -20 20 20"
    />
  </svg>
);

XIcon.defaultProps = {
  addContClasses: [],
  contClasses: ["w-100", "h-100"],
  animate: false,
  color: "black",
  fill: "none",
  strokeWidth: 1
};
XIcon.propTypes = {
  addContClasses: PropTypes.arrayOf(PropTypes.string),
  contClasses: PropTypes.arrayOf(PropTypes.string),
  animate: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func
};

export default XIcon;
