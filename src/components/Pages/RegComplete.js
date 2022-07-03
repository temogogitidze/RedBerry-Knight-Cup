import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import classes from "./RegComplete.module.css";

import Crown from "../../assets/Crown.png";
import regCompleteBckg from "../../assets/regCompleteBckg.png";
import onboardCompleted from "../../assets/onboardCompleted.png";

const RegComplete = () => {
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
            <img
              className={classes.chess_img}
              src={regCompleteBckg}
              alt="not found"
            />
          </div>
        </Col>
        <Col className={classes.col}>
          <div className={classes.right_container}>
            <img
              className={classes.onboardCmplt_img}
              src={onboardCompleted}
              alt="not found"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegComplete;
