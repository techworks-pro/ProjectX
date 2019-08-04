import React, { Component, useState } from 'react';
import Signup from '../../Form/Signup';
import Signin from '../../Form/Signin';
import './Home.css';
import Welcome from '../Welcome/Welcome';
import Footer from '../Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDict: [
        {
          name: 'sunil',
          password: 'password'
        }
      ]
    };
  }

  submitValidation = ({ name, value, preventDefault }) => {
    preventDefault();
    const loginDict = this.state.loginDict;
    const userInput = {
      name: name,
      password: value
    };
    loginDict.map(stored =>
      stored.name === userInput.name && stored.password === userInput.password
        ? alert('Logging in')
        : alert('Incorrect username or password')
    );
  };
  newSignup = () => {};

  render() {
    return (
      <div className='container'>
        <div className='app'>
          <div className='main'>
            <div className='form'>
              <div className='card-head'>MEMBER SIGN IN</div>
              <div className='inner'>
                <Signin
                  name='signin'
                  id='signin'
                  action={this.submitValidation}
                />
              </div>
            </div>

            <div className='form welc'>
              <div className='card-head'>Welcome to This That Page.</div>
              <div className='inner'>
                <Welcome />
              </div>
            </div>

            <div className='form'>
              <div className='card-head'>New Member</div>
              <div className='inner'>
                <Signup name='signup' id='signup' action={this.newSignup} />
              </div>
            </div>
          </div>

          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
