import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


const Nav = () =>{

   
  
    return (
      <div>
       <ul>
          <Link to='/Counter'><li>Counter</li></Link>
          <Link to='/ToDos'><li>ToDo</li></Link>
          {/* <Link to='/Counter'><li>Ticker</li></Link>
          <Link to='/Counter'><li>StopWatch</li></Link> */}
       </ul>
      </div>
      
        
    )
}

export default Nav;