import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./FirstStepForm.module.css";

import succValidate from "../../assets/succValidate.png";
import InvalidInput from "../UI/InvalidInput";
import Button from "../UI/NextButton";
import BackButton from "../UI/BackButton";
import { UserContext } from "../context/UserContext";

const FirstStepForm = (props) => {
  const { setUserData } = useContext(UserContext);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const numberInputRef = useRef();
  const dateInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState();
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredNumberIsValid, setEnteredNumberIsValid] = useState();
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDateIsValid, setEnteredDateIsValid] = useState();
  const [formValidationState, setFormValidationState] = useState(false);

  const setLocalStorageData = () =>
    setUserData({
      name: localStorage.getItem("enteredName"),
      email: localStorage.getItem("enteredEmail"),
      phone: localStorage.getItem("enteredNumber"),
      date_of_birth: localStorage.getItem("enteredDate"),
    });

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    setEnteredName(enteredName);
    setEnteredEmail(enteredEmail);
    setEnteredNumber(enteredNumber);
    setEnteredDate(enteredDate);

    if (enteredName.trim().length >= 2) {
      setEnteredNameIsValid(true);
    } else {
      setEnteredNameIsValid(false);
    }

    if (enteredEmail.includes("@redberry.ge")) {
      setEnteredEmailIsValid(true);
    } else {
      setEnteredEmailIsValid(false);
    }

    if (enteredNumber.length === 9) {
      setEnteredNumberIsValid(true);
    } else {
      setEnteredNumberIsValid(false);
    }

    if (enteredDate.length > 0) {
      setEnteredDateIsValid(true);
    } else {
      setEnteredDateIsValid(false);
    }

    let formIsValid =
      enteredName.trim().length >= 2 &&
      enteredEmail.includes("@redberry.ge") &&
      enteredNumber.length === 9 &&
      enteredDate.length > 0;

    if (formIsValid) {
      props.setFormValidationState(true);
      setFormValidationState(true);
      setLocalStorageData();
    }
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    localStorage.setItem("enteredName", e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    localStorage.setItem("enteredEmail", e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setEnteredNumber(e.target.value);
    localStorage.setItem("enteredNumber", e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    localStorage.setItem("enteredDate", e.target.value);
  };

  const succesIcon = (
    <img
      className={classes.succ_validate_img}
      src={succValidate}
      alt="not found"
    />
  );

  useEffect(() => {
    setEnteredName(localStorage.getItem("enteredName"));
    setEnteredEmail(localStorage.getItem("enteredEmail"));
    setEnteredNumber(localStorage.getItem("enteredNumber"));
    setEnteredDate(localStorage.getItem("enteredDate"));
    setLocalStorageData();
  }, []);

  const nameInputClasses =
    enteredNameIsValid === false ? classes.invalid_input : classes.input;

  const emailInputClasses =
    enteredEmailIsValid === false ? classes.invalid_input : classes.input;

  const enteredNumberClasses =
    enteredNumberIsValid === false ? classes.invalid_input : classes.input;

  const enteredDateClasses =
    enteredDateIsValid === false ? classes.invalid_input : classes.input;

  return (
    <div onClick={props.onClick}>
      <form onSubmit={formSubmissionHandler}>
        <div className={classes.form_container}>
          <input
            value={enteredName == null ? "" : enteredName}
            onChange={nameChangeHandler}
            ref={nameInputRef}
            placeholder="Name *"
            className={nameInputClasses}
          />
          {enteredNameIsValid && succesIcon}
          <input
            value={enteredEmail == null ? "" : enteredEmail}
            onChange={emailChangeHandler}
            ref={emailInputRef}
            placeholder="Email address *"
            className={emailInputClasses}
          />
          {enteredEmailIsValid && succesIcon}
          <input
            value={enteredNumber == null ? "" : enteredNumber}
            onChange={phoneChangeHandler}
            ref={numberInputRef}
            placeholder="Phone number *"
            className={enteredNumberClasses}
            type="number"
          />
          {enteredNumberIsValid && succesIcon}
          <input
            value={enteredDate == null ? "" : enteredDate}
            onChange={dateChangeHandler}
            ref={dateInputRef}
            placeholder="Date of birth * (Month/Day/Year)"
            className={enteredDateClasses}
          />
          {enteredDateIsValid && succesIcon}
        </div>
        <section className={classes.buttons}>
          <NavLink to="/">
            <BackButton />
          </NavLink>
          {!formValidationState && (
            <Button opacity={"0.6"} type="submit">
              Next
            </Button>
          )}
          {formValidationState && (
            <NavLink to="/second-step">
              <Button type="submit">Next</Button>
            </NavLink>
          )}
        </section>
        <div className={classes.invalid_input_container}>
          {enteredNameIsValid === false && (
            <InvalidInput
              name={"name"}
              text={"Name must be at least 2 characters"}
            />
          )}
          {enteredEmailIsValid === false && (
            <InvalidInput
              name={"email"}
              text={"Please enter valid email address"}
            />
          )}
          {enteredNumberIsValid === false && (
            <InvalidInput
              name={"number"}
              text={"Phone number must be 9 digits"}
            />
          )}
          {enteredDateIsValid === false && (
            <InvalidInput
              name={"date"}
              text={"Date of birth field should not be empty"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default FirstStepForm;
