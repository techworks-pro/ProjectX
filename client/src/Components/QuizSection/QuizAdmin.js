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
                    Question:'',
                    Option1:'',
                    Option2:'',
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
                onChange={e => this.setState({ Question: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ Option1: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ Option2: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ Option3: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ Option4: e.target.value })}
              />
            </th>
            <th>
              <input
                type='text'
                onChange={e => this.setState({ Answer: e.target.value })}
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