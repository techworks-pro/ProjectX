import { Home, About, Game, QuizAdmin, Quizzes, Profile } from "./Components/index";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Games" component={Game} />
        <Route path="/Profile" exact component={Profile}/>
        <Route path="/About" exact component={About} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Quizzes" exact component={Quizzes} />
        <Route path ='/QuizAdmin' exact component={QuizAdmin} />
        <Route component={()=>'404 not found'}/>
      </Switch>
    );
  }
}
export default Routes;
