import React from "react";

import classes from "./StartButton.module.css";

import arrow from "../../assets/arrow1.png";

const StartButton = (props) => {
  return (
    <button className={classes.button}>
      {props.children}
      <img className={classes.button_img} src={arrow} alt="not found" />
    </button>
  );
};

export default StartButton;
