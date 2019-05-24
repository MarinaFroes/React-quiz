import React from "react";
import "./App.css";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
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
        </div>
      ))}
    </div>
  );
}

export default App;
