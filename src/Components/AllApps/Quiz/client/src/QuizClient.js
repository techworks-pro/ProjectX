import React, { Component } from 'react';
import axios from 'axios';

class QuizClient extends Component {
  constructor() {
    super();
    this.state = {
      Quiz: []
    };
  }

  async componentDidMount() {
    const res = await axios.get('/Quiz');
    console.log(res.data);
    this.setState({
      Quiz: res.data
    });
  }

  render() {
    console.log(this.state.Quiz);
    return this.state.Quiz ? (
      <div>
        {this.state.Quiz.map(el => {
          return (
            <li>
              QN:{el.id} Question: {el.Question} Answer: {el.Answer}
            </li>
          );
        })}
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default QuizClient;
