import React from "react";

import classes from "./RadioForm.module.css";

const RadioForm = ({ onChange }) => {
  return (
    <div className={classes.form_container} onChange={onChange}>
      <p className={classes.radio_text}>
        Have you participated in the Redberry Championship ? *
      </p>
      <div className={classes.input_container}>
        <input
          className={classes.input_yes}
          type="radio"
          name="participation"
          value={true}
          defaultChecked
        />
        <span className={classes.ss}>Yes</span>
        <input
          className={classes.input_no}
          type="radio"
          name="participation"
          value={false}
        />
        <span className={classes.ss}>No</span>
      </div>
    </div>
  );
};

export default RadioForm;
