import React, { Component } from 'react';
import './index.css';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      t: 0,
      hour: 0,
      minute: 0,
      sec: 0,
      milisec: 0,
      isRunning: false
    };
  }
  Reset = () => {
    this.setState({ isRunning: false });
    clearInterval(this.state.t);
    this.ResetHour();
    this.ResetMinute();
    this.ResetSec();
    this.ResetMilisec();
  };
  ResetMilisec = () => {
    this.setState({ milisec: 0 });
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
          if (this.state.milisec === 100) {
            this.setState({ sec: this.state.sec + 1 });
            this.ResetMilisec();
            if (this.state.sec === 60) {
              this.setState({ minute: this.state.minute + 1 });
              this.ResetSec();
              if (this.state.minute === 60) {
                this.setState({ hour: this.state.hour + 1 });
                this.ResetMinute();
              }
            }
          } else console.log('works');
          this.setState({ milisec: this.state.milisec + 1 });
        }, 10)
      });
    } else {
    }
  };

  render() {
    return (
      <div>

        <div className='bg-white text-center rounded'>
          <h1>
            {this.state.hour} : {this.state.minute} : {this.state.sec}:{' '}
            {this.state.milisec}{' '}
          </h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center border rounded">
                  <button type='button' className='btn btn-success btn-lg m-2' onClick={this.Reset}>
                    Reset
                  </button>

                  <button type='button' className='btn btn-success btn-lg m-2' onClick={this.Start}>
                    Start
                  </button>

                  <button type='button' className='btn btn-success btn-lg m-2' onClick={this.Pause}>
                    Pause
                  </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;