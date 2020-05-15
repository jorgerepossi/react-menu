import React, { useState } from "react";
import PropTypes from "prop-types";
const Input = ({
  label,
  value,
  name,
  number,
  inputType,
  className,
  passwordShowHide,
  onChange,
  onBlur,
  onFocus,
  InputWidth,
  ...props
}) => {
  const [state, setState] = useState({
    value: "",
    focus: false,
  });

  const handleOnChange = (event) => {
    setState({
      ...state,
      value: event.target.value,
    });
    onChange(event.target.value);
  };

  const handleOnFocus = (event) => {
    setState({
      ...state,
      focus: true,
    });
    onFocus(event);
  };

  const handleOnBlur = (event) => {
    setState({
      ...state,
      focus: false,
    });
    onBlur(event);
  };

  const getAllClassesUsed = () => {
    if (state.focus === true || state.value !== "") {
      return "is-focus";
    } else {
      return "";
    }
  };
  let inputElement, htmlFor;

  const addClassNames = ["reusecore__input"];

  if (className) {
    addClassNames.push(className);
  }

  if (InputWidth) {
    addClassNames.push(InputWidth);
  }

  switch (inputType) {
    // Type Text
    case "text":
      inputElement = (
        <div className="inputField">
          <input
            {...props}
            id={htmlFor}
            type={inputType}
            name={name}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            value={state.value}
            className={className}
          />
        </div>
      );
      break;

    // Type Password
    case "password":
      inputElement = (
        <div className="inputField">
          <input
            {...props}
            id={htmlFor}
            type={inputType}
            name={name}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            value={state.value}
          />
        </div>
      );
      break;

    // Type Password
    case "number":
      inputElement = (
        <div className="inputField">
          <input
            {...props}
            id={htmlFor}
            type={inputType}
            name={name}
            min="0"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            value={state.value}
          />
        </div>
      );
      break;

    // Type textArea
    case "textarea":
      inputElement = (
        <div className="inputField">
          <textarea
            {...props}
            id={htmlFor}
            className={className}
            type={inputType}
            name={name}
            onChange={handleOnChange}
            value={state.value}
          />
        </div>
      );
      break;

    // Default
    default:
      inputType = (
        <div className="inputField">
          <input
            {...props}
            id={htmlFor}
            className={className}
            type={inputType}
            name={htmlFor}
            onChange={handleOnChange}
            value={state.value}
          />
        </div>
      );
  }
  return (
    <div className={`${addClassNames.join(" ")} ${getAllClassesUsed()}`}>
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  inputType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  className: PropTypes.string,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  passwordShowHide: PropTypes.bool,
};

Input.defaultProps = {
  inputType: "text",
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
};
export default Input;
