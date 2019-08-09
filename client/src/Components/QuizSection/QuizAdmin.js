import React, { Component } from 'react';
import './quiz.css';
import axios from 'axios';

class QuizAdmin extends Component {
  constructor() {
    super();
    this.state = {
      QuestionSet: [],
      editArr: [],
      ID:"",
      Question: '',
      Option1: '',
      Option2: '',
      Option3: '',
      Option4: '',
      Answer: '',
      pressViewButton: false,
      handleButtonState: 'Add Quiz',
      editIndex: null
    };
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    if (this.state.handleButtonState === 'Add Quiz') {
      return this.addQuiz(event)
    } else if (this.state.handleButtonState === "Edit Quiz") {
      return this.editQuiz(event)
    }
    
  }

  editQuiz = async event => {
    event.preventDefault();
    const { ID, Question, Option1, Option2, Option3, Option4, Answer } = this.state;
  
    console.log('editQuiz fired!', this.state);

    try {
      await axios.put(`api/quizs/`, {
        id: ID,
        question: Question,
        option1: Option1,
        option2: Option2,
        option3: Option3,
        option4: Option4,
        answer: Answer
      })
      this.setState({
        Question: '',
        Option1: '',
        Option2: '',
        Option3: '',
        Option4: '',
        Answer: '',
        handleButtonState: 'Add Quiz'
      });
      console.log('Edit Quiz successful!');
    } catch (error) {
      console.log(error)
    }
    const res = await axios.get(`/api/quizs`);
    this.setState({
      QuestionSet: res.data,
    })
  };

  addQuiz = async event => {
    event.preventDefault();
    const { Question, Option1, Option2, Option3, Option4, Answer } = this.state;
    console.log('AddQuiz fired!', this.state);
    try {
      await axios.post(`/api/quizs/`, {
        id: 0,
        question: Question,
        option1: Option1,
        option2: Option2,
        option3: Option3,
        option4: Option4,
        answer: Answer
      });
      this.setState({
        Question: '',
        Option1: '',
        Option2: '',
        Option3: '',
        Option4: '',
        Answer: ''
      });
      console.log('AddQuiz successful!');
    } catch (error) {
      console.error(error);
    }
    const res = await axios.get(`/api/quizs`);
    this.setState({
      QuestionSet: res.data,
    })
  };

  async componentDidMount() {
    try {
      //axios build in json()
      const res = await axios.get(`/api/quizs`);
      // let arr = new Array(res.data.length).fill(false);
      console.log("res.data: ", res.data);
      this.setState({
        QuestionSet: res.data
      });
    } catch (err) {
      console.log(`Got error when fetching data,the error is ${err}`);
    }
  }
  
  viewQuiz = async event => {
    if (this.state.pressViewButton === false) {
      try {
        //axios build in json()
        const res = await axios.get(`/api/quizs`);
        let arr = new Array(res.data.length).fill(false);
        this.setState({
          QuestionSet: res.data,
          editArr: arr,
          pressViewButton: true
        });
      } catch (err) {
        console.log(`Got error when fetching data,the error is ${err}`);
      }
    } else if (this.state.pressViewButton === true) {
      this.setState({
        QuestionSet: [],
        editArr: [],
        pressViewButton: false
      });
    }
  };

  editMode = async index => {
    let { id, question, option1, option2, option3, option4, answer } = this.state.QuestionSet[index];
    console.log(this.state.QuestionSet[index])
    this.setState({
      ID: id,
      Question: question,
      Option1: option1,
      Option2: option2,
      Option3: option3,
      Option4: option4,
      Answer: answer,
      editIndex: index,
      handleButtonState: "Edit Quiz"
    });
  }

  

  
  onChange = event => {
    event.preventDefault();
    console.log(event.target.value)
    console.log(`${event.target.name} + ':' + ${event.target.value}`);
    this.setState({
      [event.target.name]: event.target.value
    })
  
  }


  render() {
    console.log("loggin this.sate.QuestionSet ", this.state.QuestionSet);
    return <div className="container p-5 border">
      <div className="Existing Quiz" />
      <button type="button" onClick={this.viewQuiz}>
        View Quiz
        </button>
      <ol>
        {this.state.QuestionSet.map((el, index) => {
          return (
            <li key={index}>
              {el.question}
              <button onClick={() => this.editMode(index)}>Edit</button>
            </li>
          );
        })}
      </ol>

      <form
        onSubmit={this.handleSubmit}
        style={{ width: '80%', margin: '0 auto' }}
      >
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            name="Question"
            type="text"
            onChange={this.onChange}
            value={this.state.Question}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="option1">Option1</label>
          <input
            name="Option1"
            type="text"
            onChange={this.onChange}
            value={this.state.Option1}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="option2">Option2</label>
          <input
            name="Option2"
            type="text"
            onChange={this.onChange}
            value={this.state.Option2}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="option3">Option3</label>
          <input
            name="Option3"
            type="text"
            onChange={this.onChange}
            value={this.state.Option3}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="option4">Option4</label>
          <input
            name="Option4"
            type="text"
            onChange={this.onChange}
            value={this.state.Option4}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <input
            name="Answer"
            type="text"
            onChange={this.onChange}
            value={this.state.Answer}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success">
          {this.state.handleButtonState}
        </button>
      </form>
    </div>
  };
}
  

export default QuizAdmin;