import React from "react";
import Question from "./Question";
import AnswerOption from "./AnswerOption";
// import PropTypes from "prop-types";

const Quiz = ({ getQuestion, checkAnswer }) => (
  <div>
    <Question content={getQuestion["question"]} />
    <AnswerOption
      answer={getQuestion.answerOptions["a"]}
      correctAnswer={getQuestion.correctAnswer}
      checkAnswer={checkAnswer}
    />
    <AnswerOption
      answer={getQuestion.answerOptions["b"]}
      correctAnswer={getQuestion.correctAnswer}
      checkAnswer={checkAnswer}
    />
    <AnswerOption
      answer={getQuestion.answerOptions["c"]}
      correctAnswer={getQuestion.correctAnswer}
      checkAnswer={checkAnswer}
    />
{/*       
    <button onClick={() => this.setState((prevState, props) => ({
      questionId: prevState.questionId + 1
    }))}>Next</button> */}
      </div>
);

export default Quiz;

// Quiz.propTypes = {
//   content: PropTypes.string.isRequired
// };
