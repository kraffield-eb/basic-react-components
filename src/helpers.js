export const propValidator = {
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
    let isClassName = ["string", "undefined"].includes(typeof c);
    if (!isClassName) {
      throw new Error(
        `classNames must be a string or undefined, recieved ${c}`
      );
    }
    return typeof c === "string";
  });
  let deduped = [...new Set(filtered)];
  return deduped.join(" ");
};
