import React from 'react';

const Chapters = ({ chapterslist, groupQuestions }) => {
  return (
    <div className='Languages'>
      <button
        type='button'
        onClick={() => groupQuestions('Javascript')}
        name='Javascript'
      >
        Javascript
      </button>
      <br />
      <button type='button' onClick={() => groupQuestions('HTML')} name='HTML'>
        HTML
      </button>
    </div>
  );
};

export default Chapters;
