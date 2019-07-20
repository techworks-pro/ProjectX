import React from "react";
import Routes from "./Routes";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/header";

const app = props => {
  return (
    <div>
      <Header />
      <Nav />
      <Routes />
    </div>
  );
};

export default app;
