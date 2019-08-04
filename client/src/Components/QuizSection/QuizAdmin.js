import React, { Component } from 'react';
import './quiz.css';

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
  addQuiz = () => {
    const { quiz } = this.state;
    if (this.state.isloaded) {
      fetch(
        `process.env.PORT/QuizAdmin/add?Question=${quiz.Question}&Option1=${
          quiz.Option1
        }&Option2=${quiz.Option2}Option3=${quiz.Option3}&Option4=${
          quiz.Option4
        }&Answer=${quiz.Answer}`
      );
    }
  };
  render() {
    return (
      <div className='QuizAdminBody'>
        <div>Insert Quiz</div>
        <div className='QuizTable'>
          <tr>
            <th>Question</th>
            <th>Option1</th>
            <th>Option2</th>
            <th>Option3</th>
            <th>Option4</th>
            <th>Answer</th>
          </tr>
          <tr>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ qstn: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ op1: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ op2: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ op3: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ op4: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ ans: e.target.value })}
              />
            </th>
          </tr>

          <button onClick={this.addQuiz}>Add</button>
        </div>
      </div>
    );
  }
}
export default QuizAdmin;
