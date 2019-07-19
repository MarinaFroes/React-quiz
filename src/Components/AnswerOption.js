import React from "react";
import PropTypes from "prop-types";

const AnswerOption = ({
  answer,
  correctAnswer,
  checkAnswer,
  isChecked,
  option
}) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      id={option}
      value={answer}
      checked={isChecked}
      onChange={e => {
        console.log(`Selected: ${e.target.value}`);
        console.log(`Correct: ${correctAnswer}`);
        if (e.target.value === correctAnswer) {
          checkAnswer(true);
          console.log(true);
        } else {
          console.log(false);
          checkAnswer(false);
        }
        
      }}
    />
    <label className="radioCustomLabel" htmlFor={answer}>
      {answer}
    </label>
  </li>
);

export default AnswerOption;

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};
