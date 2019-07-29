import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      t: 0,
      hour: 0,
      minute: 0,
      sec: 0,
      isRunning: false
    };
  }
  Reset = () => {
    this.setState({ isRunning: false });
    clearInterval(this.state.t);
    this.ResetHour();
    this.ResetMinute();
    this.ResetSec();
  };
  ResetSec = () => {
    this.setState({ sec: 0 });
  };
  ResetMinute = () => {
    this.setState({ minute: 0 });
  };
  ResetHour = () => {
    this.setState({ hour: 0 });
  };

  Pause = () => {
    this.setState({ isRunning: false });
    clearInterval(this.state.t);
  };

  Start = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.setState({
        t: setInterval(() => {
          if (this.state.sec === 60) {
            this.setState({ minute: this.state.minute + 1 });
            this.ResetSec();
            if (this.state.minute === 60) {
              this.setState({ hour: this.state.hour + 1 });
              this.ResetMinute();
            }
          } else console.log('works');
          this.setState({
            sec: this.state.sec + 1
          });
        }, 1000)
      });
    } else {
    }
  };

  render() {
    return (
      <div>
        <div className='nav'>Timer</div>

        <div className='clock'>
          <h1>
            {this.state.hour} : {this.state.minute} : {this.state.sec}{' '}
          </h1>
        </div>

        <button type='button' className='butts' onClick={this.Reset}>
          Reset
        </button>

        <button type='button' className='butts' onClick={this.Start}>
          Start
        </button>

        <button type='button' className='butts' onClick={this.Pause}>
          Pause
        </button>
      </div>
    );
  }
}

export default App;
