import React, { Component } from "react";
import Quiz from "./Quizzes/quizzes";
import Nav from "./QuizNavs/nav";
import { Route } from "react-router-dom";
class Quizzes extends Component {
  render() {
    const quizzesStyle = {
      display: "inline-flex",
      justifyContent: "space-between",
      alignItems: "column",
      padding: "10px",
      margin: "10px",
      width: "100%"
    };

    return (
      <div style={quizzesStyle}>
        <div>
          <Nav />
        </div>
        <div>
          <Route>
            {" "}
            <Quiz />
          </Route>
        </div>
        <div>User points and Dashboard</div>
      </div>
    );
  }
}
export default Quizzes;
