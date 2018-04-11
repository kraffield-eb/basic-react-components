"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FormInput.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        containerClasses = _props.containerClasses,
        error = _props.error,
        inputClasses = _props.inputClasses,
        labelClasses = _props.labelClasses,
        name = _props.name,
        onChange = _props.onChange,
        required = _props.required,
        type = _props.type,
        uncontrolled = _props.uncontrolled,
        value = _props.value,
        props = _objectWithoutProperties(_props, ["containerClasses", "error", "inputClasses", "labelClasses", "name", "onChange", "required", "type", "uncontrolled", "value"]);

    var id = name + "-input";
    var errorColor = error ? "dark-red" : "";
    var borderColor = error ? "b--dark-red" : "b--black-20";
    var inputProps = _extends({
      id: id,
      name: name,
      required: required,
      className: [].concat(inputClasses, [borderColor]).join(" "),
      type: type,
      "aria-describedby": id
    }, props);

    if (!uncontrolled) {
      inputProps.value = value;
      inputProps.onChange = onChange;
    }

    return _react2.default.createElement(
      "div",
      { className: containerClasses.join(" ") },
      _react2.default.createElement(
        "label",
        { htmlFor: id, className: [errorColor].concat(labelClasses).join(" ") },
        name,
        required ? "*" : ""
      ),
      _react2.default.createElement("input", _extends({}, inputProps, { ref: function ref(r) {
          return _this2.inputRef = r;
        } }))
    );
  };

  return FormInput;
}(_react.Component);

FormInput.propTypes = process.env.NODE_ENV !== "production" ? {
  containerClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  error: _propTypes2.default.bool,
  inputClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  labelClasses: _propTypes2.default.arrayOf(_propTypes2.default.string),
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  required: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(["text", "password"]),
  uncontrolled: _propTypes2.default.bool
} : {};

FormInput.defaultProps = {
  containerClasses: [],
  inputClasses: ["input-reset", "ba", "pa2", "mb2", "db", "w-100"],
  labelClasses: ["f6", "b", "db", "mb2"],
  required: false,
  type: "text",
  uncontrolled: false
};

exports.default = FormInput;
module.exports = exports["default"];