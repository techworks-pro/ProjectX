import React from 'react';
import Field from './field/field';

const form = (props) => {
    
    


    return (
        <form style={props.style}>
            Username <br/><Field
                id='0'
                name='username'
                type='text'
                placeholder='ex. john.smith' /><br />
            Password <br/><Field
                id='1'
                name='password'
                type='password'
                placeholder='*****' /><br />
            First Name <br/><Field
                        id='2'
                        name='name'
                        type='text'
                placeholder='John' /><br/>
            
            Last Name <br/><Field
                        id='3'
                        name='name'
                        type='text'
                placeholder='Smith' /><br/>
            
            
            Email <br/><Field
                id='4'
                name='email'
                type='email'
                placeholder='ex. sometext@email.com' /><br/>
            Phone <br/><Field
                id='5'
                name='phone'
                type='number'
                placeholder='555 555 5555' /><br />
             
            <Field
                id='6'
                name='submit'
                type='submit'
                placeholder='' />
            
        </form>
        

    )
}

export default form;