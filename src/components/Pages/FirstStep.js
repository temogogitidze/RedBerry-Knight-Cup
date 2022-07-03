import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import classes from "./FirstStep.module.css";

import chess from "../../assets/chess.png";
import Crown from "../../assets/Crown.png";
import regStep from "../../assets/regStep.png";

import Button from "../UI/NextButton";
import BackButton from "../UI/BackButton";

const FirstStep = () => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault()

    console.log(enteredName)
  }

  return (
    <Container fluid className={classes.main_container}>
      <Row>
        <Col className={classes.col}>
          <div className={classes.left_container}>
            <section className={classes.left_header}>
              <img
                src={Crown}
                alt="not found"
                className={classes.crown_photo}
              />
              <p className={classes.left_header_text}>RedBerry Knight Cup</p>
            </section>
            <div className={classes.background_text}>
              "WHEN YOU SEE A GOOD MOVE, <br />
              LOOK FOR A BETTER ONE." <br />
              <div className={classes.emanuel_lasker}>-EMANUEL LASKER</div>
            </div>
            <img className={classes.chess_img} src={chess} alt="not found" />
          </div>
        </Col>
        <Col className={classes.col}>
          <div className={classes.right_container}>
            <div className={classes.right_header}>
              <section className={classes.right_header_txt}>
                Start Creating Your Account
              </section>
            </div>
            <div className={classes.right_body}>
              <section>
                <img src={regStep} alt="not found" />
              </section>
              <section>
                <p className={classes.pers_info}>Personal Information</p>
                <p className={classes.basic_info}>
                  This Is Basic Information Fields
                </p>
              </section>
              <form onSubmit={formSubmissionHandler}>
                <div className={classes.form_control}>
                  <input placeholder="Name *" className={classes.input} />
                  <input
                    placeholder="Email address *"
                    className={classes.input}
                  />
                  <input
                    placeholder="Phone number *"
                    className={classes.input}
                  />
                  <input
                    placeholder="Date of birth *"
                    className={classes.input}
                  />
                </div>
                <section className={classes.buttons}>
                  <NavLink to="/">
                    <BackButton></BackButton>
                  </NavLink>
                  <NavLink to="/second-step">
                    <Button>Next</Button>
                  </NavLink>
                </section>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstStep;
