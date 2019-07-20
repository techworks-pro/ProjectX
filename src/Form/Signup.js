import React from "react";
import Field from "./field/field";

const signupForm = props => {
  let signupId = 0;
  signupId++;
  return (
    <form style={props.style}>
      Username <br />
      <Field
        id={props.id + signupId++}
        name="username"
        type="text"
        placeholder="ex. john.smith"
      />{" "}
      <br />
      Password <br />{" "}
      <Field
        id={props.id + signupId++}
        name="password"
        type="password"
        placeholder="*****"
      />{" "}
      <br />
      First Name <br />{" "}
      <Field
        id={props.id + signupId++}
        name="name"
        type="text"
        placeholder="John"
      />{" "}
      <br />
      Last Name <br />{" "}
      <Field
        id={props.id + signupId++}
        name="name"
        type="text"
        placeholder="Smith"
      />{" "}
      <br />
      Email <br />{" "}
      <Field
        id={props.id + signupId++}
        name="email"
        type="email"
        placeholder="ex. sometext@email.com"
      />{" "}
      <br />
      Phone <br />{" "}
      <Field
        id={props.id + signupId++}
        name="phone"
        type="number"
        placeholder="555 555 5555"
      />{" "}
      <br />
      <Field
        id={props.id + signupId++}
        name="submit"
        type="submit"
        placeholder=""
      />
    </form>
  );
};

export default signupForm;
