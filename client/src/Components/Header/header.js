import React from "react";

const header = () => {
  const headingStyle = {
    color: "white",
    textShadow: "3px 3px green",
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0",
    marginBotton: "0"
  };
  return (
    <div className="App-header">
      <h1 style={headingStyle}>Quonto</h1>
    </div>
  );
};

export default header;
