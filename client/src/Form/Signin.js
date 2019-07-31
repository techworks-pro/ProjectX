import React from "react";
import Field from "./field/field";

const signin = (style, action) => {
  let id = 0;
  id++;
  return (
    <>
      <form style={style} onSubmit={action}>
        Username
        <br />
        <Field
          id={id++}
          name="username"
          type="text"
          placeholder="ex. john.smith"
        />
        <br />
        Password
        <br />
        <Field id={id++} name="password" type="password" placeholder="******" />
        <br />
        <Field id={id++} name="submit" type="submit" placeholder="" />
      </form>
    </>
  );
};

export default signin;
