import React, { useState } from "react";
import Button from "../../UI/Button";
// import "./CourseInput.css";

import styles from  "./CourseInput.module.css"
//import styled from "styled-components";

{
  /* I am using styled-components */
}

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? " #fad0ec" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className='form-control'> */}
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      {/* Instead inline style in div, i am using FormControl because I am using Styled Component  I am using css class  */}

      {/* <FormControl className = {!isValid && 'invalid' }> */}

      {/* Adding Props to styled-components*/}
      {/* <FormControl invalid={!isValid}> */}

      <div className= {`${styles['form-control']} ${!isValid && styles.invalid}`} >
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}{" "}
        {/* Instead inline style, I am using css class  */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </div> */}
        {/* </FormControl> */}
      {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
