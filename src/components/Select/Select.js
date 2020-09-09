import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

function Select(props) {
  function handleChange(option) {
    const selectedOption = option.target.value;
    props.handleChange(selectedOption);
  }
  return (
    <select onChange={handleChange}>
      {props.options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

Select.prototypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
