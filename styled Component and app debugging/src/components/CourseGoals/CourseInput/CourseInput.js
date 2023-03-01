import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'};
//     @media (min-width:768px) {
//       width:auto;
//      }
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props =>(props.invalid ? 'red':'#ccc')};
//     background:${props => props.invalid ? '#ffd7d7' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//   // &.invalid input {
//   //   border-color: red;
//   //   background: #ffd7d7;
//   // }
//   // &.invalid label {
//   //   color: red;
//   // }
// `; //when we want to render a div with style comp

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsvalid] = useState(true); //indicator for user submiitted input is valid or not,initially set a true for input is valid

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      //reset functionality if user is type something then it will black otherwise red
      setIsvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      //if length of enter input is not 0
      setIsvalid(false); // if user enetered and submitt is invalid then apply css style in return lable
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    //for  it is dynamic inline css using style props with color propery in style object
    // <FormControl className={!isValid && 'invalid'}> </FormControl> normal way to use using div comp
    // nxt is uing invalid props  <FormControl invalid={!isValid}> </FormControl>
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
