import React from 'react';
import CounterSource from './CounterSource';
import CounterApp from './CounterApp';

const Counter = ()=>{
    return(
        <div className = 'content-container'>
        <div className = 'sources'><CounterSource /></div>
        <div className = 'app-example'><CounterApp /></div>
        </div>
    )
}

export default Counter;