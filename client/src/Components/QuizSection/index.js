import React, { Component } from "react";
import axios from "axios";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizs: "",
      isLoaded: false
    };
  }

  async componentDidMount() {
    try {
      //axios build in json()
      const res = await axios.get(`/api/quizs`);
      console.log(res.data);
      this.setState({
        quizs: res.data,
        isLoaded: true
      });
    } catch (err) {
      console.log(`Got error when fetching data,the error is ${err}`);
    }
  }

  render() {
    return this.state.isLoaded ? (
      <div> {this.state.quizs}</div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Quiz;
