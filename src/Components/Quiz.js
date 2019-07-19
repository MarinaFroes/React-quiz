import React from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";
import PropTypes from "prop-types";

const Quiz = ({ getQuestion, checkAnswer, onSubmit, counter, total }) => (
  <div>
    <QuestionCount counter={counter} total={total} />
    <form onSubmit={onSubmit}>
      <Question content={getQuestion()["question"]} />
      <AnswerOption
        answer={getQuestion().answerOptions["a"]}
        correctAnswer={getQuestion().correctAnswer}
        checkAnswer={checkAnswer}
        option="A"
      />
      <AnswerOption
        answer={getQuestion().answerOptions["b"]}
        correctAnswer={getQuestion().correctAnswer}
        checkAnswer={checkAnswer}
        option="B"
      />
      <AnswerOption
        answer={getQuestion().answerOptions["c"]}
        correctAnswer={getQuestion().correctAnswer}
        checkAnswer={checkAnswer}
        option="C"
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Quiz;

Quiz.propTypes = {
  getQuestion: PropTypes.func.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
