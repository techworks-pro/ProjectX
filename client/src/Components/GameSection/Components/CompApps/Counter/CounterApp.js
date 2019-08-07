import React, { Component } from "react";
import "./CounterApp.css";

class counterApp extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      tog: "Single Count",
      togCount: 1
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + this.state.togCount
    });
  };

  decrement = togCount => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - this.state.togCount
      });
    }
  };
  reset = () => {
    this.setState({
      counter: 0
    });
  };
  toggle = () => {
    this.setState({
      togCount: this.state.togCount === 1 ? 2 : 1,
      tog: this.state.tog === "Single Count" ? "Double Count" : "Single Count"
    });
  };
  render() {
    console.log("this is line number 13", this.state.counter);
    return (
      <div className="container border rounded p-4">
        <div className="text-white bt">
          <h1 className="bg-dark p-4 text-center"> {this.state.counter} </h1>

          <button type="button" onClick={this.reset} className="btn btn-success btn-lg btn-block">
            Reset
          </button>
          <button type="button" onClick={this.increment} className="btn btn-success btn-lg btn-block">
            Increment
          </button>
          <button type="button" onClick={this.decrement} className="btn btn-success btn-lg btn-block">
            Decrement
          </button>
          <button type="button" onClick={this.toggle} className="btn btn-success btn-lg btn-block">
            {this.state.tog}
          </button>
        </div>
      </div>
    );
  }
}

export default counterApp;
