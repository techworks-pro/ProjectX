import React, { Component } from "react";
import Signup from '../../Form/Signup';
import Signin from "../../Form/Signin";
import "../../App.css";
import Nav from "../Nav/Nav";
import Welcome from "../Welcome/Welcome";
import Footer from "../Footer/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDict: [
        {
          name: "sunil",
          password: "password"
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
        ? alert("Logging in")
        : alert("Incorrect username or password")
    );
  };

  render() {
    const headingStyle = {
      color: "white",
      textShadow: "3px 3px black",
      textTransform: "uppercase"
    };

    return (
      <div className="container">
        <div className="app">
          <div className="App-header">
            <h1 style={headingStyle}>HOMEPAGE</h1>
            <Nav />
          </div>
          <div className="main">
            <div className="form">
              <div className="card-head">New Member</div>
              <div className="inner">
                <Signup name="signup" id="0" />
              </div>
            </div>

            <div className="form welc">
              <div className="card-head">Welcome to This That Page.</div>
              <div className="inner">
                <Welcome />
              </div>
            </div>

            <div className="form">
              <div className="card-head">MEMBER SIGN IN</div>
              <div className="inner">
                <Signin name="signin" id="0" action={this.submitValidation} />
              </div>
            </div>
          </div>

          <div class="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
