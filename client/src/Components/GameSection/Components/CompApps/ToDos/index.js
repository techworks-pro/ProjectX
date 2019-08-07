import React from 'react';
import ToDosSource from './ToDosSource';
import ToDosApp from './ToDosApps';

const ToDos = ()=>{
    return(
        <div className= 'row'>
        <div className = 'col-8'><ToDosSource /></div>
        <div className = 'col-4'><ToDosApp /></div>
        </div>
    )
}

export default ToDos;