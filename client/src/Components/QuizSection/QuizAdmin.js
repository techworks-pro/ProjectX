import React, { Component } from 'react';
import './quiz.css';
import axios from 'axios';

class QuizAdmin extends Component {
  constructor() {
    super();
    this.state = {
      Question: '',
      Option1: '',
      Option2: '',
      Option3: '',
      Option4: '',
      Answer: ''
    };
  }
  addQuiz = async (event) => {
    event.preventDefault();
    const { Question, Option1, Option2, Option3, Option4, Answer } = this.state;
    console.log("AddQuiz fired!", this.state);

    try {
      await axios.post(
        `/api/quizs/add`, {
          id: 0,
          question: Question,
          option1: Option1,
          option2: Option2,
          option3: Option3,
          option4: Option4,
          answer: Answer
        }
      );
      this.setState(
        {
          Question: '',
          Option1: '',
          Option2: '',
          Option3: '',
          Option4: '',
          Answer: ''
        }
      )
      console.log('AddQuiz successful!')
    } catch (error) {
      console.error(error)
    }


  };
  render() {
    return (
      <div className="container p-5 border">
        <form onSubmit={this.addQuiz} style={{ width: '80%' }}>

          <div className="form-group">
            <label for="question">Question</label>
            <input
              type='text'
              onChange={e => this.setState({ Question: e.target.value })}
              value={this.state.Question}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="option1">Option1</label>
            <input
              type='text'
              onChange={e => this.setState({ Option1: e.target.value })}
              value={this.state.Option1}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="option2">Option2</label>
            <input
              type='text'
              onChange={e => this.setState({ Option2: e.target.value })}
              value={this.state.Option2}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="option3">Option3</label>
            <input
              type='text'
              onChange={e => this.setState({ Option3: e.target.value })}
              value={this.state.Option3}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="option4">Option4</label>
            <input
              type='text'
              onChange={e => this.setState({ Option4: e.target.value })}
              value={this.state.Option4}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="answer">Answer</label>
            <input
              type='text'
              onChange={e => this.setState({ Answer: e.target.value })}
              value={this.state.Answer}
              className="form-control"
            />
          </div>


          <button type="submit" className="btn btn-success">Submit Question</button>

        </form>
      </div>

    );
  }
}
export default QuizAdmin;