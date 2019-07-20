import React from "react";
// import Input from '../Components/input';

import Nav from "./Components/Navigation/nav";
import Sources from "./Components/Sources/sources";
// import AppRouter from "./AppRouter";
import { Route } from "react-router-dom";
import { Counter, ToDos } from "./AppExport";

const index = () => {
  const style = {
    display: "flex",
    // alignItems: "stretched",
    margin: "0 10rem",
    padding: "20px",
    backgroundColor: "grey",
    position: "relative",
    flexWrap: "wrap"
  };
  const mainStyle = {
    display: "flex",
    alignItems: "stretched",
    margin: "0 10rem",
    padding: "20px",
    backgroundColor: "grey",
    position: "relative",
    flexWrap: "wrap"
  };
  return (
    <div style={style}>
      <div style={{ width: "15%" }}>
        <Nav />
        {/* <button onClick={this.changeApp}/> */}
      </div>
      <div style={mainStyle}>
        <div>
          <Sources />
        </div>
        <div>
          {" "}
          <Route path="/AllApps/Counter" component={Counter} />{" "}
          <Route path="/AllApps/ToDos" component={ToDos} />
        </div>
      </div>
    </div>
  );
};

export default index;
