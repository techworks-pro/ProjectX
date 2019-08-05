import React from "react";
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
  return (
    <nav
      className="navbar navbar-expand navbar-light"
      style={{ backgroundColor: '#72A894', justifyContent: "center" }}>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Games" className="nav-link">
              Games
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quizs" className="nav-link">
              Quizzes
            </Link>
          </li>

          {/*
                      
                      <Link to="/Home" className="nav-link">
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
                  </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default nav;
