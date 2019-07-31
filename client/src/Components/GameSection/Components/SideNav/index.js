import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='allAppNav'>
      <ul>
        <Link to='/Games/Counter'>
          <li>Counter</li>
        </Link>
        <Link to='/Games/ToDos'>
          <li>ToDo</li>
        </Link>
        <Link to='/Games/watch'>
          <li>watch</li>
        </Link>
        <Link to='/Games/ToDos'>
          <li>Games</li>
        </Link>
        {/* <Link to='/Counter'><li>Ticker</li></Link>
          <Link to='/Counter'><li>StopWatch</li></Link> */}
      </ul>
    </div>
  );
};

export default Nav;
