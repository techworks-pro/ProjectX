import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <br />
      <div className='AboutContainer'>
        <div className='Intro-bg'>
          <div className='Intro'>
            ProjectX is a full-stack web application developed by techworks
            team. Sunil Ale, Donghao Wu And Rinchen Lama
          </div>
        </div>
        <div className='Walkthrough'>
          The project is deployed on Heroku and uses the ClearDB MySQL as a
          functional database where it stores the data for Users and Quizes.
        </div>
        <div className='Dependencies'>
          <p>The following dependencies were used:</p>
          <ul>Express.js </ul>
          <ul>Morgan </ul>
          <ul>MySQL </ul>
          <p>The following extensions on Heroku were used:</p>
          <ul>ClearDB MySQL</ul>
        </div>
      </div>
    </div>
  );
};

export default About;
