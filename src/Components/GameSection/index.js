import React from "react";
import { Route } from "react-router-dom";
import './game.css';
import SideNav from "./Components/SideNav";
import { Counter, ToDos } from "./Components/AppsContent";

const Game = () => {

  return (
    <div className='games-container'>
      <div className='sideNav'><SideNav /></div>
      {" "}
      <Route path="/Games/Counter" component={Counter} />{" "}
      <Route path="/Games/ToDos" component={ToDos} />
      <Route path="/Games/" exact component={Counter} />
    </div>
  );
};
//This file will be imported in ./src/Components/index.js
export default Game;
