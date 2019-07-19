import React from "react";
import "./App.css";
import { allQuestions } from "./Components/allQuestions";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";

class App extends React.Component {
  state = {
    counter: 0,
    questionId: 0,
    question: "",

    answer: "",
    correctAnswers: 0
  };

  componentWillMount() {
    this.setState({
      question: allQuestions[0].question
    });
  }

  getQuestion = () =>
    this.state.questionId < 10 && allQuestions[this.state.questionId];

  checkAnswer = answer => {
    if (answer) {
      this.setState((prevState, props) => ({
        correctAnswers: prevState.correctAnswers + 1
      }));
    }
    this.setState((prevState, props) => ({
      questionId: prevState.questionId + 1
    }));
  };

  getNewGame = e => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      questionId: 0
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.questionId < allQuestions.length ? (
          <Quiz
            getQuestion={this.getQuestion}
            checkAnswer={this.checkAnswer}
            counter={this.state.questionId + 1}
            total={allQuestions.length}
          />
        ) : (
          <Result
            correctAnswers={this.state.correctAnswers}
            total={allQuestions.length}
            playAgain={this.getNewGame}
          />
        )}

        {console.log(`correct answers: ${this.state.correctAnswers}`)}
      </div>
    );
  }
}

export default App;
