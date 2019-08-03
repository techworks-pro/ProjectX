import React from "react";
import Field from "./field/field";

const signin = (style, action) => {
  let id = 0;
  id++;
  return (
    <>
      {/* <form style={style} onSubmit={action}>
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
      </form> */}

      <form onSubmit={action}>
        <div className="form-group">
        <label for="username">Username</label>
        <Field
          id={id++}
          name="username"
          type="text"
          placeholder="ex. john.smith"
          />
          </div>
        
        <div className="form-group">
        <label for="username">Password</label>
          <Field
            id={id++}
            name="password" type="password" placeholder="******" />
         
          </div>
          
        <button id={id++} name="submit" type="submit"
        className="btn btn-success"
        >Login</button>
      </form>
    </>
  );
};

export default signin;
