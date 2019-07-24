import React from "react";
import Routes from "./Routes";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/header";
import './App.css';

const app = props => {
  return (
    <div id = 'main_container'>
      <Header />
      <Nav />
      <Routes />
    </div>
  );
};
//This file will be imported in index.js
export default app;
