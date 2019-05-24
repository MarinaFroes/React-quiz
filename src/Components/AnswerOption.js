import React from "react";
import PropTypes from "prop-types";

const AnswerOption = ({ answer, correctAnswer }) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      checked={answer === correctAnswer}
      id={answer}
      value={answer}
      disabled={answer}
    />
    <label className="radioCustomLabel" htmlFor={answer}>
      {answer}
    </label>
  </li>
);

export default AnswerOption;

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired
};
