import React, { Component } from "react";
import axios from "axios";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    try {
      //axios build in json()
      const res = await axios.get(`/quizs`);
      console.log(res);
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
      <div> {this.state.questions.map(el=>{
        return <div>
                   <li>
          {el.question}
          </li>
          <li>
          {el.option1}
          </li>
          <li>
          {el.option2}
          </li>
          <li>
          {el.option3}
          </li>
          <li>
          {el.option4}
          </li>

          </div>
         
          
      })}</div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Quiz;
