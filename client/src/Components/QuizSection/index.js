import React, { Component } from 'react';
import axios from 'axios';
import './quiz.css';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      questionSet: [],
      questionNum: 0,
      score: 0,
      isLoaded: false
    };
  }
  selectOption = event => {
    console.log(event.target.name);
    console.log(this.state.questions[this.state.questionNum].answer);

    if (
      String(event.target.name) ===
      String(this.state.questions[this.state.questionNum].answer)
    ) {
      console.log('right answer!');
      this.setState({ score: this.state.score + 1 });
    }
    this.nextQuestion();
  };

  nextQuestion = event => {
    this.setState({ questionNum: this.state.questionNum + 1 });
  };

  async componentDidMount() {
    try {
      //axios build in json()
      const res = await axios.get(`/quizs`);
      this.setState({
        questions: res.data,
        isLoaded: true
      });
    } catch (err) {
      console.log(`Got error when fetching data,the error is ${err}`);
    }
  }

  render() {
    return this.state.isLoaded ? (
      this.state.questions.length !== this.state.questionNum ? (
        <div className='QuizBox'>
          <div className='QuestionBox'>
            {this.state.questions[this.state.questionNum].question}
          </div>
          <div className='OptionBox'>
            <button
              class='button'
              onClick={this.selectOption}
              name={this.state.questions[this.state.questionNum].option1}
            >
              {this.state.questions[this.state.questionNum].option1}
            </button>

            <button
              class='button'
              onClick={this.selectOption}
              name={this.state.questions[this.state.questionNum].option2}
            >
              {this.state.questions[this.state.questionNum].option2}
            </button>

            <button
              class='button'
              onClick={this.selectOption}
              name={this.state.questions[this.state.questionNum].option3}
            >
              {this.state.questions[this.state.questionNum].option3}
            </button>
            <button
              class='button'
              onClick={this.selectOption}
              name={this.state.questions[this.state.questionNum].option4}
            >
              {this.state.questions[this.state.questionNum].option4}
            </button>

            {/* <button type='button' onClick={this.nextQuestion()}>
            Next
          </button> */}
          </div>
        </div>
      ) : (
        <div className='QuizEnd'>
          End of Quiz!
          <div className='FinalScore'> Your Score is : {this.state.score}</div>
        </div>
      )
    ) : (
      <div>Loading...</div>
    );

    // );
  }
}

export default Quiz;
