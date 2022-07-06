import React, { useState } from "react";

import classes from "./InvalidInput.module.css";

import warningInput from "../../assets/warningInput.png";
import closeImg from "../../assets/closeImg.png";

const InvalidInput = (props) => {
  const [close, setClose] = useState(false);

  const inputCloseHandler = () => {
    setClose(true);
  };

  return (
    <div
      className={classes.main_container}
      style={{ display: close ? "none" : "flex" }}
    >
      <section className={classes.upper_part}>
        <img
          src={warningInput}
          alt="not found"
          className={classes.warning_img}
        />
        Invalid {props.name}
        <img
          alt="not found"
          onClick={inputCloseHandler}
          src={closeImg}
          className={classes.close_button}
        />
      </section>
      <section className={classes.lower_part}>{props.text}</section>
    </div>
  );
};

export default InvalidInput;
