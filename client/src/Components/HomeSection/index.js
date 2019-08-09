import React, { Component } from "react";
import Signup from "../../Form/Signup";
import Signin from "../../Form/Signin";
import "./Home.css";
import Welcome from "../Welcome/Welcome";

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
  newSignup = () => {};
  render() {
    return (
      <div className="container">
        <div className="row m-5">
          
          <div className="col-4">
            <div className="card border">
              <div className="card-header" style={{ backgroundColor: 'rgb(114, 168, 148)' }}>New Member</div>
              <div className="card-body">
                <Signup name="signup" id="signup" action={this.newSignup} />
              </div>
            </div>
            </div>
              

          <div className="col-4">
            <div className="card">
              <div className="card-header" style={{backgroundColor: 'rgb(114, 168, 148)'}}>Welcome to this that page</div>
              <div className="card-body">
                <Welcome/>
              </div>
            </div>
            </div>

          <div className="col-4">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: 'rgb(114, 168, 148)' }}>MEMBER SIGN IN</div>
                  <div className="card-body">
                    <Signin
                      name="signin"
                      id="signin"
                      action={this.submitValidation}
                    />
                  </div> 
            </div>
            </div>
          
        </div>
        
        </div>
      
    );
  }
}

export default Home;
