import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const nav = () => {
  const style = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#72A894",
    boxShadow: "5px 5px",
    width: "96%"
  };
/// style={{ backgroundColor: '#72A894', justifyContent: "center" }}
  return (
    <div className="navbar navbar-expand" >
      <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" >
              <Link to="/Home">
                <Menu name="Home" source="#" />
              </Link>
              <Link to="/About">
                <Menu name="About" source="#" />
              </Link>
              <Link to="/Games">
                <Menu name="Games" source="#" />
              </Link>
              <Link to="/quizs">
                <Menu name="Quiz" source="#" />
              </Link>
            </ul>
      </div>
        
    </div>
    
  );
};

export default nav;
