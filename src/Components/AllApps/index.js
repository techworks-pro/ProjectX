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
    flexWrap: "wrap",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  };
  const mainStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    flexWrap: "wrap",
    alignItems: "center"
  };
  return (
    <div style={style}>
      <div style={{}}>
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
          <Route path="/AllApps/" exact component={ToDos} />
        </div>
      </div>
    </div>
  );
};

export default index;
