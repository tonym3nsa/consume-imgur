import React, { useState, useEffect } from "react";
import "./CheckBox.css";

function CheckBox(props) {
  const [checked, setChecked] = useState(null);
  const randomID = `checkbox${randomizeID()}`;
  useEffect(() => {
    if (checked === true || checked === false) {
      props.handleChecked(checked);
    }
  }, [checked]);
  function handleChange(status) {
    const checkedStatus = status.target.checked;

    setChecked(checkedStatus);
  }
  function randomizeID() {
    return Math.floor(Math.random() * 1000);
  }
  return (
    <span>
      <input
        id={props.checkboxID}
        checked={checked ? checked : false}
        onChange={handleChange}
        type="checkbox"
      />{" "}
      <label className="checkbox-label" htmlFor={props.checkboxID}>
        {props.text}
      </label>
    </span>
  );
}

export default CheckBox;
