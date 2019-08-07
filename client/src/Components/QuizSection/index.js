import React, { Component } from 'react';
import axios from 'axios';
// import { Container, Col, Row } from 'react-bootstrap';
import './quiz.css';
import DisplayScore from './DisplayScore';
import Chapter from './Chapters';

class Quizzes extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      questionSet: [],
      questionNum: 0,
      score: 0,
      groupedQ: [],
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

  setQuestion = id => {
    this.setState({ questionNum: id });
  };

  groupQuestions = Language => {
    let arr = this.state.questions;
    let groupedArr = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].Language == Language) {
        groupedArr.push(arr[i]);

        console.log('groupedArr', groupedArr);

        this.setState({ questions: groupedArr });
        console.log('Questions: ', this.state.questions);
      }
      // else {
      //   this.state.groupedQ.push(this.state.questions[i].question);

      //   console.log(this.state.groupedQ);
      // }
    }
  };

  async componentDidMount() {
    try {
      //axios build in json()
      const res = await axios.get(`/api/quizs`);
      this.setState({
        questionSet: res.data,
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
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <h5>Select Chapter</h5>
              <Chapter
                chapterslist={this.state.questions}
                groupQuestions={this.groupQuestions}
              />
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
