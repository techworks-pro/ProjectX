import React from "react";
import "./Menu.css";

const menu = props => {
  const style = {
    color: "inherit",
    textDecoration: "none"
  };

  return (
    <li className="nav-item">
      <a href={props.source} style={style} className="navbar-link">
        {props.name}
      </a>
    </li>
  );
};

export default menu;
