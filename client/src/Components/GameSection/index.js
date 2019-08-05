import React from "react";
import { Route } from "react-router-dom";
import './game.css';
import SideNav from "./Components/SideNav";
import { Counter, ToDos } from "./Components/CompApps";

const Game = () => {

  return (
    <div className='container-fluid mt-3 mb-3'>
      <div className="row">
          <div className='col-2'><SideNav /></div>
          {" "}
          <div className="col-10">
              <Route path="/Games/Counter" component={Counter} />{" "}
              <Route path="/Games/ToDos" component={ToDos} />
              <Route path="/Games/" exact component={Counter} />
          </div>
      </div>
    </div>
  );
};
//This file will be imported in ./src/Components/index.js
export default Game;
