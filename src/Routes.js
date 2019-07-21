import { Home, About, Game} from "./Components/index";
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
        <Route path="/" exact component={Home} />
      </Switch>
    );
  }
}
export default Routes;
