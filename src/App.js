import React from "react";
import "./App.css";
import QuestionCount from "./Components/QuestionCount";
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
    if (answer) {
      this.setState((prevState, props) => ({
        correctAnswers: prevState.correctAnswers + 1
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
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
        {this.state.questionId < 10 ? (
          <div key={this.getQuestion}>
            <QuestionCount
              counter={this.state.questionId + 1}
              total={allQuestions.length}
            />
            <Quiz
              getQuestion={this.getQuestion}
              checkAnswer={this.checkAnswer}
              onSubmit={this.handleSubmit}
            />
          </div>
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
