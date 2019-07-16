import React from "react";
import PropTypes from "prop-types";

const AnswerOption = ({ answer, correctAnswer, checkAnswer }) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      id={answer}
      value={answer}
      onChange={e => {
        if (e.target.value === correctAnswer) {
          checkAnswer(true);
          console.log(true);
        } else {
          console.log(false);
          checkAnswer(false);
        }
      }}
    />
    <label
      className="radioCustomLabel"
      htmlFor={answer}>
      {answer}
    </label>
  </li>
);

export default AnswerOption;

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired
};
