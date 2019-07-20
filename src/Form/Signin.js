import React from "react";
import Field from "./field/field";

const signin = ({ style, action, id }) => {
  let signinId = 0;
  signinId++;
  return (
    <>
      <form style={style} onSubmit={action}>
        Username
        <br />
        <Field
          id={id + signinId++}
          name="username"
          type="text"
          placeholder="ex. john.smith"
        />
        <br />
        Password
        <br />
        <Field
          id={id + signinId++}
          name="password"
          type="password"
          placeholder="******"
        />
        <br />
        <Field
          id={id + signinId++}
          name="submit"
          type="submit"
          placeholder=""
        />
      </form>
    </>
  );
};

export default signin;
