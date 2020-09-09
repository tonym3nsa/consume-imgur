import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export function Button({ handleClick, text }) {
  return (
    <button data-testid="buttonId" onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
