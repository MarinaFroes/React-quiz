import React from "react";
import Question from "./Question";
import AnswerOption from "./AnswerOption";
// import PropTypes from "prop-types";

const Quiz = ({ getQuestion, checkAnswer, onSubmit }) => (
  <form>
    <Question content={getQuestion["question"]} />
    <AnswerOption
      answer={getQuestion.answerOptions["a"]}
      correctAnswer={getQuestion.correctAnswer}
      checkAnswer={checkAnswer}
      checked={true}
    />
    <AnswerOption
      answer={getQuestion.answerOptions["b"]}
      correctAnswer={getQuestion.correctAnswer}
      checkAnswer={checkAnswer}
      checked={false}
    />
    <AnswerOption
      answer={getQuestion.answerOptions["c"]}
      correctAnswer={getQuestion.correctAnswer}
      checkAnswer={checkAnswer}
      checked={false}
    />
    <button type="submit" onClick={onSubmit}>Next</button>
  </form>
);

export default Quiz;

// Quiz.propTypes = {
//   content: PropTypes.string.isRequired
// };