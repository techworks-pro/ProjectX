import React from 'react';
import Field from './field/field';

const signin = action => {
  let id = 0;
  id++;
  return (
    <form onSubmit={action}>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <Field
          id={'SignUp' + id++}
          name='username'
          type='text'
          placeholder='ex. john.smith'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='username'>Password</label>
        <Field
          id={'SignUp' + id++}
          name='password'
          type='password'
          placeholder='******'
        />
      </div>

      <button
        id={'SignUp' + id++}
        name='submit'
        type='submit'
        className='btn btn-success'
      >
        Login
      </button>
    </form>
  );
};

export default signin;
