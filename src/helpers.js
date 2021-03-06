import PropTypes from "prop-types";

export const propValidator = {
  classNameOptional: (props, propName, componentName) => {
    let p = props[propName];

      if (!(["undefined", "string"].includes(typeof p) || p === false ))
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Expected type "string" or value false, received ${p}`
      );
  },
  classNamesBasic: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),

  endsWithpx: (props, propName, componentName) => {
    let p = props[propName];
    if (!(typeof p === "string" && p.endsWith("px"))) {
      let msg = `Invalid prop ${propName} supplied to ${componentName}. A string that ends with "px" is required. Received: "${p}".`;
      return new Error(msg);
    }
  },
  isDecimal: (props, propName, componentName) => {
    let p = props[propName];
    let num = Number(p);
    let msg = `Invalid prop ${propName} supplied to ${componentName}. A decimal string is required. Received: "${p}".`;
    if (num < 0 || num > 1) {
      return new Error(msg);
    }
  }
};

export const cssTypes = {
  borderType: [
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "none",
    "hidden"
  ]
};

export const concatClassNames = (...args) => {
  let split = args.map(c => (typeof c === "string" ? c.split(" ") : c));
  let filtered = [].concat.apply([], split).filter(c => {
    let isClassName = ["string", "undefined"].includes(typeof c) || c === false;
    if (!isClassName) {
      throw new Error(
        `classNames must be a string or undefined, recieved ${c}`
      );
    }
    return typeof c === "string";
  });
  let deduped = Array.from(new Set(filtered));
  return deduped.join(" ");
};
