import React from 'react';
import CounterSource from './CounterSource';
import CounterApp from './CounterApp';

const Counter = ()=>{
    return(
        <div className='row'>
        <div className = 'col-8'><CounterSource /></div>
        <div className = 'col-4'><CounterApp /></div>
        </div>
    )
}

export default Counter;