import React from "react";
import { Route, Switch } from "react-router-dom";

const quizzes = () => {
  return (
    <Switch>
      <Route
        path="/Quizzes/Question1"
        component={() => (
          <div>
            <h1>What can I ask?</h1>
            <ol>
              <li>option 1</li>
              <li>option 2</li>
              <li>option 3</li>
              <li>option 4</li>
            </ol>
          </div>
        )}
      />
      <Route
        path="/Quizzes/Question2"
        component={() => (
          <div>
            <h1>What can I ask?</h1>
            <ol>
              <li>option 1</li>
              <li>option 2</li>
              <li>option 3</li>
              <li>option 4</li>
            </ol>
          </div>
        )}
      />
      <Route
        path="/Quizzes/Question3"
        component={() => (
          <div>
            <h1>What can I ask?</h1>
            <ol>
              <li>option 1</li>
              <li>option 2</li>
              <li>option 3</li>
              <li>option 4</li>
            </ol>
          </div>
        )}
      />
    </Switch>
  );
};

export default quizzes;
