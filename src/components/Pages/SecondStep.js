import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import classes from "./SecondStep.module.css";

import secondBackg from "../../assets/secondBackg.png";
import Crown from "../../assets/Crown.png";
import secondReg from "../../assets/secondReg.png";
import scndStepTchd from "../../assets/scndStepTchd.png";

import BackButton from "../UI/BackButton";
import useFetch from "../hooks/useFetch";
import InvalidInput from "../UI/InvalidInput";
import RadioForm from "../Form/RadioForm";
import SecondStepSelect from "../Form/SecondStepSelect";

const SecondStep = () => {
  const [experienceData, setExperienceData] = useState();
  const [characterData, setCharacterData] = useState([]);

  const [isTouched, setIsTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);
  const [tchdValidity, setTchdValidity] = useState(true);

  const [radioBtnData, setRadioBtnData] = useState();

  let navigate = useNavigate();

  const { data, error } = useFetch(
    "https://chess-tournament-api.devtest.ge/api/grandmasters"
  );

  const experienceOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Professional", label: "Professional" },
  ];

  const characterOptions = data;

  const experienceChangeHandler = (event) => {
    setExperienceData(event);
    localStorage.setItem("experienceData", JSON.stringify(event));
  };

  const characterChangeHandler = (event) => {
    setCharacterData(event);
    localStorage.setItem("characterData", JSON.stringify(event));
  };

  const radioBtnChangeHandler = (e) => {
    setRadioBtnData(e.target.value);
  };

  useEffect(() => {
    setExperienceData(JSON.parse(localStorage.getItem("experienceData")));
    setCharacterData(JSON.parse(localStorage.getItem("characterData")));
    setRadioBtnData("Yes");
  }, []);

  const isTouchedHandler = () => {
    setIsTouched(true);
  };

  const doneButtonHandler = () => {
    setTchdValidity(false);
    if (characterData && experienceData) {
      setFormIsValid(true);
      navigate("/reg-completed");
      localStorage.clear();
    }
  };

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
                <img
                  src={!isTouched ? secondReg : scndStepTchd}
                  alt="not found"
                />
              </section>
              <section>
                <p className={classes.chess_exp}>Chess Experience</p>
                <div className={classes.basic_info}>
                  <div className={classes.invalid_input_container}>
                    {!formIsValid && !tchdValidity && (
                      <InvalidInput
                        name="Input"
                        text="Form submission failed, select all fields"
                      />
                    )}
                  </div>
                  This Is Basic Information Fields
                </div>
              </section>
              <section
                onClick={isTouchedHandler}
                className={classes.character_select}
              >
                <SecondStepSelect
                  placeholder={"Level of knowledge *"}
                  options={experienceOptions}
                  onChange={experienceChangeHandler}
                  value={experienceData === null ? undefined : experienceData}
                />
                <SecondStepSelect
                  value={characterData === null ? undefined : characterData}
                  options={
                    characterOptions &&
                    characterOptions.map((o, i) => {
                      return {
                        id: i,
                        value: o.name,
                        label: o.name,
                        image: `https://chess-tournament-api.devtest.ge${o.image}`,
                      };
                    })
                  }
                  onChange={characterChangeHandler}
                  placeholder={"Choose your character *"}
                />
              </section>
              <section className={classes.radio_input_container}>
                <RadioForm
                  value={"Yes"}
                  value1={"No"}
                  yes={"Yes"}
                  no={"No"}
                  onChange={radioBtnChangeHandler}
                />
              </section>
              <section className={classes.buttons}>
                <NavLink to="/first-step">
                  <BackButton />
                </NavLink>
                <button
                  onClick={doneButtonHandler}
                  className={classes.done_button}
                >
                  Done
                </button>
              </section>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondStep;
