import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, type, onClick, disabled, className, id,  ...props }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} id={id}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
};

export default Button;
