import React from "react";

const field = function({ id, name, type, placeholder, action }) {
  const style = {
    padding: "5px",
    margin: "10px 10px 10px 0"
  };
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className = "form-control"
      onClick={action}
    />
  );
};

export default field;
