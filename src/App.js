import React from "react";
import "./App.css";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
import AnswerOption from "./Components/AnswerOption";
import { allQuestions } from "./Components/allQuestions";

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        correct: 0,
        incorrect: 0
      },
      result: ""
    };
  }

  componentWillMount() {
    this.setState({
      question: allQuestions[0].question,
      answerOptions: allQuestions[0].answerOptions
    });
    console.log(this.state.question);
    console.log(this.state.answerOptions);
  }

  render() {
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
}

export default App;

