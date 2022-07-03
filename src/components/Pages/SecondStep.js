import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import classes from "./SecondStep.module.css";

import secondBackg from "../../assets/secondBackg.png";
import Crown from "../../assets/Crown.png";
import secondReg from "../../assets/secondReg.png";

import BackButton from "../UI/BackButton";

const SecondStep = () => {
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
              "MANY HAVE BECOME CHESS MASTERS, <br />
              NO ONE HAS BECOME THE MASTER OF CHESS." <br />
              <div className={classes.siegbert_tarrasch}>
                -SIEGBERT TARRASCH
              </div>
            </div>
            <img
              className={classes.chess_img}
              src={secondBackg}
              alt="not found"
            />
          </div>
        </Col>
        <Col className={classes.col}>
          <div className={classes.right_container}>
            <div className={classes.right_header}>
              <section className={classes.right_header_txt}>
                First Step Is Done, Continue To Finish Onboarding
              </section>
            </div>
            <div className={classes.right_body}>
              <section>
                <img src={secondReg} alt="not found" />
              </section>
              <section>
                <p className={classes.chess_exp}>Chess Experience</p>
                <p className={classes.basic_info}>
                  This Is Basic Information Fields
                </p>
              </section>
              <section className={classes.buttons}>
                <NavLink to="/first-step">
                  <BackButton />
                </NavLink>
                <NavLink to="/reg-completed">
                  <button className={classes.done_button}>Done</button>
                </NavLink>
              </section>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondStep;
