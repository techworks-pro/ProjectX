import React from 'react';
import Field from './field/field';

const signupForm = props => {
  let signupID = 0;
  signupID++;
  return (
    <form onSubmit={props.action}>
      <div className='form-group'>
        <label htmlFor='username'>Username </label>
        <Field
          id={signupID++}
          name='username'
          type='text'
          placeholder='ex. john.smith'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <Field
          id={signupID++}
          name='password'
          type='password'
          placeholder='*****'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='firstName'>First Name </label>
        <Field
          id={signupID++}
          name='name'
          type='text'
          placeholder='John'
        />{' '}
      </div>

      <div className='form-group'>
        <label htmlFor='lastName'>Last Name </label>
        <Field id={signupID++} name='name' type='text' placeholder='Smith' />
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email </label>
        <Field
          id={signupID++}
          name='email'
          type='email'
          placeholder='ex. sometext@email.com'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='phone'>Phone </label>
        <Field
          id={signupID++}
          name='phone'
          type='number'
          placeholder='555 555 5555'
        />
      </div>

      <button
        id={signupID++}
        name='submit'
        type='submit'
        className='btn btn-success'
      >
        Signup
      </button>
    </form>
  );
};

export default signupForm;
