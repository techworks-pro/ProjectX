import React from 'react';
import './quiz.css';
const DisplayScore = props => {
  return (
    <div>
      <div className='ScoreDisplay'>{props.score}</div>
    </div>
  );
};
export default DisplayScore;
