import React from "react";

import classes from "./RadioForm.module.css";

const RadioForm = ({ value, value1, onChange, yes, no }) => {
  return (
    <form className={classes.form_container}>
      <p className={classes.radio_text}>
        Have you participated in the Redberry Championship ? *
      </p>
      <div className={classes.input_container}>
        <input
          type="radio"
          name="radio-btn"
          value={value}
          onChange={onChange}
          defaultChecked
        />
        <div className={classes.yes_text}>{yes}</div>
        <input
          type="radio"
          name="radio-btn"
          value={value1}
          onChange={onChange}
        />
        <div className={classes.no_text}> {no}</div>
      </div>
    </form>
  );
};

export default RadioForm;
