import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="allAppNav">
      <ul>
        <Link to="/Quizzes/Question1">
          <li>Question 1</li>
        </Link>
        <Link to="/Quizzes/Question2">
          <li>Question 2</li>
        </Link>
        <Link to="/Quizzes/Question3">
          <li>Question 3</li>
        </Link>
        <Link to="/Quizzes/Question4">
          <li>Question 4</li>
        </Link>
        {/* <Link to='/Counter'><li>Ticker</li></Link>
          <Link to='/Counter'><li>StopWatch</li></Link> */}
      </ul>
    </div>
  );
};

export default Nav;
