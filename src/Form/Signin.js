import React from 'react';
import Field from './field/field'

const signin = (style, action ) => {
    return (
        <form style={style} onSubmit={action}>
            Username
            <br />
            <Field
                id='0'
                name='username'
                type='text'
                placeholder='ex. john.smith' /><br />
           
            
            Password
            <br />
            <Field
                id='1'
                name='password'
                type='password'
                placeholder='******' /><br/>
            
             
            <Field
                id='2'
                name='submit'
                type='submit'
                placeholder=''
            />
            
        </form>
    );
}

export default signin;