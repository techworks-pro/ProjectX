import { Home, About, Game, Quizzes } from "./Components/index";
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
        <Route path="/Games" component={Game} />
        <Route path="/About" exact component={About} />
        <Route path="/Home" exact component={Home} />
        <Route path="/quizs" exact component={Quizzes} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route component={()=>'404 not found'}/>
      </Switch>
    );
  }
}
export default Routes;
