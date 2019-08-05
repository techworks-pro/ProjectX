import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomeSection,
  AboutSection,
  GameSection,
  QuizSection,
  QuizAdmin,
  Profile
} from './Components';

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path='/Games' component={GameSection} />
        <Route path='/Quizes' exact component={QuizSection} />
        <Route path='/QuizAdmin' exact component={QuizAdmin} />
        <Route path='/About' exact component={AboutSection} />
        <Route path='/Home' exact component={HomeSection} />
        <Route path='/Profile' exact component={Profile} />
        <Route path='/' exact component={HomeSection} />
      </Switch>
    );
  }
}
//This file will be imported in App.js
export default Routes;
