import { HomeSection, AboutSection, GameSection} from "./Components/index";
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
        <Route path="/Games" component={GameSection} />
        <Route path="/About" exact component={AboutSection} />
        <Route path="/Home" exact component={HomeSection} />
        <Route path="/" exact component={HomeSection} />
      </Switch>
    );
  }
}
//This file will be imported in App.js
export default Routes;
