import React from "react";
import Routes from "./Routes";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/Footer"
import './App.css';

const app = props => {
  return (
      <div className='container-fluid' id = "main_container">
    

      <Header />
      <Nav />
      <Routes />
      <div className="footer">
            <Footer />
          </div>
    </div>
  );
};
//This file will be imported in index.js
export default app;
