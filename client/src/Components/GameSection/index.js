//This file will be imported in ./src/Components/index.js

import React from 'react';
import { Route } from 'react-router-dom';
import './game.css';
import SideNav from './Components/SideNav';
import { Counter, ToDos, StopWatch } from './Components/CompApps';

const Game = () => {
  return (
    <div className='container-fluid mt-3 mb-3'>
      <div className='row'>
        <div className='col-2'>
          <SideNav />
        </div>{' '}
        <div className='col-10'>
          <Route path='/Games/Counter' component={Counter} />{' '}
          <Route path='/Games/ToDos' component={ToDos} />
          <Route path='/Games/StopWatch' component={StopWatch} />
          <Route path='/Games/' exact component={Counter} />
        </div>
      </div>
    </div>
  );
};
export default Game;
