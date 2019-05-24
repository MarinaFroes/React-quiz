import React from "react";
import "./App.css";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";

function App() {
  return (
    <div className="App">
      <QuestionCount counter={1} total={10}/>
      <Question content="What is the color of the sky?"/>
    </div>
  );
}

export default App;
