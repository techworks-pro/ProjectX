import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <nav
      className='navbar navbar-expand navbar-light'
      style={{ backgroundColor: '#72A894' }}
    >
      <div
        className='collapse navbar-collapse justify-content-center'
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/Home' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Profile' className='nav-link'>
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Games' className='nav-link'>
              Games
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Quizzes' className='nav-link'>
              Quizzes
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/QuizAdmin' className='nav-link'>
              Quiz Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default nav;
