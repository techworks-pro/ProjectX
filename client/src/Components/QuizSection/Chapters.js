import React from 'react';

const Chapters = ({ chapterslist, groupQuestions }) => {
  return (
    <div className='Languages'>
      <button
        type='button'
        onClick={() => groupQuestions('Javascript')}
        name='Javascript'
        className="btn btn-success btn-block"
      >
        Javascript
      </button>
      <br />
      <button type='button' onClick={() => groupQuestions('HTML')} name='HTML'
      className="btn btn-success btn-block">
        HTML
      </button>
      <br />
      <button type='button' onClick={() => groupQuestions('Java')} name='Java'
        className="btn btn-success btn-block">
        Java
      </button>
    </div>
  );
};

export default Chapters;
