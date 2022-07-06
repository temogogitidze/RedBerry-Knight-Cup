import React from "react";

import classes from "./NextButton.module.css";

import arrow from "../../assets/arrow1.png";

const Button = (props) => {
  return (
    <button
      style={{ opacity: props.opacity }}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
      <img className={classes.button_img} src={arrow} alt="not found" />
    </button>
  );
};

export default Button;
