import React, { useEffect, useState, useContext } from "react";
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
import { UserContext } from "../context/UserContext";

const SecondStep = () => {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserContext);

  const [experienceData, setExperienceData] = useState();
  const [experienceDataLocale, setExperienceDataLocale] = useState();
  const [characterData, setCharacterData] = useState();
  const [characterIdLocale, setCharacterIdLocale] = useState();
  const [radioBtnData, setRadioBtnData] = useState();

  const [isTouched, setIsTouched] = useState(false);

  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const { data } = useFetch(
    "https://chess-tournament-api.devtest.ge/api/grandmasters"
  );

  const characterOptions = data;

  const experienceOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "normal", label: "Intermediate" },
    { value: "professional", label: "Professional" },
  ];

  const experienceChangeHandler = (event) => {
    setExperienceData(event);
    localStorage.setItem("experienceData", JSON.stringify(event));
    localStorage.setItem("experienceDataLocale", JSON.stringify(event.value));
    userData.experience_level = event.value;
  };

  const characterChangeHandler = (event) => {
    setCharacterData(event);
    localStorage.setItem("characterData", JSON.stringify(event));
    localStorage.setItem("characterIdLocale", JSON.stringify(event.id));
    userData.character_id = event.id;
  };

  const radioBtnChangeHandler = (e) => {
    setRadioBtnData(e.target.value === "true" ? true : false);
    localStorage.setItem(
      "participation",
      JSON.stringify(e.target.value === "true" ? true : false)
    );
    userData.already_participated = e.target.value === "true" ? true : false;
  };

  const setLocalStorageData = () =>
    setUserData({
      name: localStorage.getItem("enteredName"),
      email: localStorage.getItem("enteredEmail"),
      phone: localStorage.getItem("enteredNumber"),
      date_of_birth: localStorage.getItem("enteredDate"),
      experience_level: experienceDataLocale && experienceDataLocale,
      character_id: characterIdLocale && characterIdLocale,
      already_participated: true,
    });

  const isTouchedHandler = () => {
    setIsTouched(true);
  };

  const doneButtonHandler = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var body = JSON.stringify({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      date_of_birth: userData.date_of_birth,
      experience_level: userData.experience_level,
      already_participated: userData.already_participated,
      character_id: userData.character_id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
      redirect: "follow",
    };

    fetch(
      "https://chess-tournament-api.devtest.ge/api/register",
      requestOptions
    )
      .then((response) =>
        response.status === 201
          ? registrationCompleteFn()
          : setFormIsInvalid(true)
      )
      .catch((error) => console.log("error", error));
  };

  const registrationCompleteFn = () => {
    navigate("/reg-completed");
    localStorage.clear();
  };

  useEffect(() => {
    setExperienceData(JSON.parse(localStorage.getItem("experienceData")));
    setCharacterData(JSON.parse(localStorage.getItem("characterData")));
    setExperienceDataLocale(
      JSON.parse(localStorage.getItem("experienceDataLocale"))
    );
    setCharacterIdLocale(JSON.parse(localStorage.getItem("characterIdLocale")));
    setLocalStorageData();
    setRadioBtnData(true);
  }, [characterOptions]);

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
                    {formIsInvalid && (
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
                  style1={{ height: "40px" }}
                />
                <SecondStepSelect
                  value={characterData && characterData}
                  options={
                    characterOptions &&
                    characterOptions.map((option) => {
                      return {
                        id: option.id,
                        value: option.name,
                        label: option.name,
                        image: `https://chess-tournament-api.devtest.ge${option.image}`,
                      };
                    })
                  }
                  onChange={characterChangeHandler}
                  placeholder={"Choose your character *"}
                />
              </section>
              <section className={classes.radio_input_container}>
                <RadioForm onChange={radioBtnChangeHandler} />
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
