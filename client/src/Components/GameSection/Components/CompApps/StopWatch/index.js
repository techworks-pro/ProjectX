import React from 'react';
import Stopwatch from './StopWatch';
import StopWatchSource from './StopWatchSource';

const watch = () => {
  return (

    <div className='row'>
    <div className = 'col-8'><StopWatchSource/></div>
    <div className = 'col-4'><Stopwatch /></div>
    </div>
  );
};

export default watch;