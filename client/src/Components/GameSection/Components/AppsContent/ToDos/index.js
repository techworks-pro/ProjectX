import React from 'react';
import ToDosSource from './ToDosSource';
import ToDosApp from './ToDosApps';

const ToDos = ()=>{
    return(
        <div className= 'content-container'>
        <div className = 'sources'><ToDosSource /></div>
        <div className = 'app-example'><ToDosApp /></div>
        </div>
    )
}

export default ToDos;