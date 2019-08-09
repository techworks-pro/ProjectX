import React, { Component } from 'react';
import './quiz.css';
import axios from 'axios';

class QuizAdmin extends Component {
  constructor() {
    super();
    this.state = {
      QuestionSet: [],
      Question: '',
      Option1: '',
      Option2: '',
      Option3: '',
      Option4: '',
      Answer: '',
      pressViewButton: false,
      editing: false,
      editingIndex: null
    };
  }

  addQuiz = async event => {
    event.preventDefault();
    const { Question, Option1, Option2, Option3, Option4, Answer } = this.state;
    try {
      await axios.post(`/api/quizs/add`, {
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
        Answer: '',
        editing: false,
        editingIndex: null
      });
    } catch (error) {
      console.error(error);
    }
    const res = await axios.get(`/api/quizs`);
    this.setState({
      QuestionSet: res.data
    });
  };

  updateQuiz = async event => {
    event.preventDefault();
    const {
      QuestionSet,
      Question,
      Option1,
      Option2,
      Option3,
      Option4,
      Answer,
      editingIndex
    } = this.state;
    const id = QuestionSet[editingIndex].id;
    try {
      await axios.put(`/api/quizs/update`, {
        id: id,
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
        Answer: '',
        editing: false,
        editingIndex: null
      });
    } catch (error) {
      console.error(error);
    }
    const res = await axios.get(`/api/quizs`);
    this.setState({
      QuestionSet: res.data
    });
  };

  viewQuiz = async event => {
    if (!this.state.pressViewButton) {
      try {
        //axios build in json()
        const res = await axios.get(`/api/quizs`);
        this.setState({
          QuestionSet: res.data,
          pressViewButton: true
        });
      } catch (err) {
        console.log(`Got error when fetching data,the error is ${err}`);
      }
    } else {
      this.setState({
        QuestionSet: [],
        pressViewButton: false
      });
    }
  };

  EditQuiz = index => {
    let currentQuestion = this.state.QuestionSet[index];
    const {
      question,
      option1,
      option2,
      option3,
      option4,
      answer
    } = currentQuestion;
    this.setState({
      Question: question,
      Option1: option1,
      Option2: option2,
      Option3: option3,
      Option4: option4,
      Answer: answer,
      editingIndex: index,
      editing: true
    });
  };

  render() {
    return (
      <div className="container p-5 border">
        <div className="Existing Quiz" />
        <button type="button" onClick={this.viewQuiz}>
          View Quizzes
        </button>
        <ol>
          {this.state.QuestionSet.map((el, index) => {
            return (
              <li key={index}>
                Qusetion:{el.question}
                <br />
                Option1:{el.option1}
                <br />
                Option2:{el.option2}
                <br />
                Option3:{el.option3}
                <br />
                Option4:{el.option4}
                <br />
                Answer:{el.answer}
                <br />
                {this.state.editing ? (
                  <button disabled>Edit This Quiz</button>
                ) : (
                  <button onClick={() => this.EditQuiz(index)}>Edit This Quiz</button>
                )}
              </li>
            );
          })}
        </ol>

        <form style={{ width: '80%', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              onChange={e => this.setState({ Question: e.target.value })}
              value={this.state.Question}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="option1">Option1</label>
            <input
              type="text"
              onChange={e => this.setState({ Option1: e.target.value })}
              value={this.state.Option1}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="option2">Option2</label>
            <input
              type="text"
              onChange={e => this.setState({ Option2: e.target.value })}
              value={this.state.Option2}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="option3">Option3</label>
            <input
              type="text"
              onChange={e => this.setState({ Option3: e.target.value })}
              value={this.state.Option3}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="option4">Option4</label>
            <input
              type="text"
              onChange={e => this.setState({ Option4: e.target.value })}
              value={this.state.Option4}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer</label>
            <input
              type="text"
              onChange={e => this.setState({ Answer: e.target.value })}
              value={this.state.Answer}
              className="form-control"
            />
          </div>
          {this.state.editing ? (
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateQuiz}
            >
              Update Quiz
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.addQuiz}
            >
              Add Quiz
            </button>
          )}
        </form>
      </div>
    );
  }
}
export default QuizAdmin;
