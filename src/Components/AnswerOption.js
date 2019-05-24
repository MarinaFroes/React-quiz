import React from "react";
import PropTypes from "prop-types";

const AnswerOption = ({ answer, correctAnswer }) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      id={answer}
      value={answer}
      onChange={e => {
        if (e.target.value === correctAnswer) {
          console.log(true);
        } else {
          console.log(false);
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
  correctAnswer: PropTypes.string.isRequired
};
