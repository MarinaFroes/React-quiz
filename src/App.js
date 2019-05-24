import React from "react";
import "./App.css";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
import AnswerOption from "./Components/AnswerOption";
import { allQuestions } from "./Components/allQuestions";

function App() {
  return (
    <div className="App">
      {allQuestions.map(question => (
        <div key={question.questionId}>
          <QuestionCount
            counter={question.questionId}
            total={allQuestions.length}
          />
          <Question content={question.question} />

          <AnswerOption
            answer={question.answerOptions["a"]}
            correctAnswer={question.correctAnswer}
          />
          <AnswerOption
            answer={question.answerOptions["b"]}
            correctAnswer={question.correctAnswer}
          />
          <AnswerOption
            answer={question.answerOptions["c"]}
            correctAnswer={question.correctAnswer}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
