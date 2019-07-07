import React from "react";
import "./App.css";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
import AnswerOption from "./Components/AnswerOption";
import { allQuestions } from "./Components/allQuestions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 0,
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
  
  getQuestion = () => {
    if (this.state.questionId < 10) {
      return allQuestions[this.state.questionId];
    }
    return;
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
            <Question content={this.getQuestion()["question"]} />
            <AnswerOption
              answer={this.getQuestion().answerOptions["a"]}
              correctAnswer={this.getQuestion().correctAnswer}
            />
            <AnswerOption
              answer={this.getQuestion().answerOptions["b"]}
              correctAnswer={this.getQuestion().correctAnswer}
            />
            <AnswerOption
              answer={this.getQuestion().answerOptions["c"]}
              correctAnswer={this.getQuestion().correctAnswer}
            />
          </div>)
        }
        <button onClick={() => this.setState((prevState, props) => ({
          questionId: prevState.questionId + 1
        }))}>Next</button>
        {console.log(`question Id: ${this.state.questionId}`)}
      </div>
    );
  }
}

export default App;

