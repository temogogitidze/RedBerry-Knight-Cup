import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import classes from "./StartingPage.module.css";

import landingPhoto from "../../assets/landingPhoto.png";
import Crown from "../../assets/Crown.png";
import GetStarted from "../../assets/GetStarted.png";

const StartingPage = () => {
  return (
    <Container fluid className={classes.main_container}>
      <Row>
        <Col className={classes.col}>
          <div className={classes.left_container}>
            <section className={classes.header}>
              <img
                src={Crown}
                alt="not found"
                className={classes.crown_photo}
              />
              <p className={classes.header_text}>RedBerry Knight Cup</p>
            </section>
            <img
              className={classes.landing_photo}
              src={landingPhoto}
              alt="not found"
            />
          </div>
        </Col>
        <Col className={classes.col}>
          <div className={classes.right_container}>
            <section className={classes.rightBar_text}>
              <span className={classes.big_text}>CHESS SAYS</span>
              <span className={classes.mini_text}>A LOT ABOUT</span>
              <br />
              <span className={classes.big_text}>WHO WE ARE</span>
            </section>

            <div className={classes.start_button}>
              <NavLink to="/firstStep">
                <img
                  className={classes.start_img}
                  src={GetStarted}
                  alt="not found"
                />
              </NavLink>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StartingPage;
