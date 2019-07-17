import React from "react";
import "./App.css";
// import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
// import AnswerOption from "./Components/AnswerOption";
import { allQuestions } from "./Components/allQuestions";
import Quiz from "./Components/Quiz";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 0,
      question: "",
      answerOptions: [],
      answer: "",
      correctAnswers: 0,
      result: ""
    };
  }

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
  }

  checkAnswer = answer => {
    if (answer) {
      this.setState((prevState, props) => ({
        correctAnswers: prevState.correctAnswers + 1
      }));
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      questionId: prevState.questionId + 1
    }))
  }

  render() {
    return (
      <div className="App">
        { this.state.questionId < 10 &&
          (<div key={this.getQuestion()}>
            <QuestionCount
              counter={this.state.questionId + 1}
              total={allQuestions.length}
            />
          <Quiz
            getQuestion={this.getQuestion()}
            checkAnswer={this.checkAnswer}
            onSubmit={this.onSubmit}
            />
          </div>)
        }
        
        {console.log(`correct answers: ${this.state.correctAnswers}`)}
        
      </div>
    );
  }
}

export default App;

