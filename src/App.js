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
    answerOptions: [],
    answer: "",
    correctAnswers: 0,
    result: ""
  };

  componentWillMount() {
    this.setState({
      question: allQuestions[0].question,
      answerOptions: allQuestions[0].answerOptions
    });
    // console.log(this.state.question);
    // console.log(this.state.answerOptions);
  }

  getQuestion = () => {
    if (this.state.questionId < 10) {
      return allQuestions[this.state.questionId];
    }
    return;
  };

  checkAnswer = answer => {
    this.setState((prevState, props) => ({
      correctAnswers: {answer} && prevState.correctAnswers + 1,
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
