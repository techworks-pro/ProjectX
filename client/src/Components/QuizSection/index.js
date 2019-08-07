import React, { Component } from 'react';
import axios from 'axios';
// import { Container, Col, Row } from 'react-bootstrap';
import './quiz.css';
import DisplayScore from './DisplayScore';

class Quizzes extends Component {
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

  selectChapter = event => {
    // this.setState({})
  };

  async componentDidMount() {
    try {
      //axios build in json()
      const res = await axios.get(`/api/quizs`);
      this.setState({
        questions: res.data,
        isLoaded: true
      });
    } catch (err) {
      console.log(`Got error when fetching data,the error is ${err}`);
    }
  }

  render() {
    console.log(this.state);
    return this.state.isLoaded ? (
      this.state.questions.length !== this.state.questionNum ? (
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <h5>Select Chapter</h5>
              <p>
                <a href='#'>Chapter 1</a>
              </p>
              <p>
                <a href='#'>Chapter 2</a>
              </p>
              <p>
                <a href='#'>Chapter 3</a>
              </p>
              <p>
                <a href='#'>Chapter 4</a>
              </p>
              <p>
                <a href='#'>Chapter 5</a>
              </p>
            </div>
            <div className='col-8' xs={6}>
              <div className='QuizBox'>
                <div className='QuestionBox'>
                  {this.state.questions[this.state.questionNum].question}
                </div>
                <div className='OptionBox'>
                  <div class='d-flex justify-content-around'>
                    <button
                      class='button'
                      onClick={this.selectOption}
                      name={
                        this.state.questions[this.state.questionNum].option1
                      }
                    >
                      {this.state.questions[this.state.questionNum].option1}
                    </button>

                    <button
                      class='button'
                      onClick={this.selectOption}
                      name={
                        this.state.questions[this.state.questionNum].option2
                      }
                    >
                      {this.state.questions[this.state.questionNum].option2}
                    </button>
                  </div>
                  <div class='d-flex justify-content-around'>
                    <button
                      class='button'
                      onClick={this.selectOption}
                      name={
                        this.state.questions[this.state.questionNum].option3
                      }
                    >
                      {this.state.questions[this.state.questionNum].option3}
                    </button>
                    <button
                      class='button'
                      onClick={this.selectOption}
                      name={
                        this.state.questions[this.state.questionNum].option4
                      }
                    >
                      {this.state.questions[this.state.questionNum].option4}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h1>Score: </h1> <br />
              <DisplayScore score={this.state.score} />
            </div>
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

export default Quizzes;
