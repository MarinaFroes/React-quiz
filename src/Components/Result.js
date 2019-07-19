import React from "react";
import PropTypes from "prop-types";

const Result = ({ correctAnswers, total, playAgain }) => (
  <div>
    <h1>
      {correctAnswers} correct answers of {total}
    </h1>
    <button onClick={playAgain}>Play Again</button>
  </div>
);

export default Result;

Result.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  playAgain: PropTypes.func.isRequired
};
