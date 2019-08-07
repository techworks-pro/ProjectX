import React from 'react';

const Chapters = ({ chapterslist, groupQuestions }) => {
  //   return chapterslist.map((el, index) => (
  //     <div className='List'>
  {
    /* <button
        type='button'
        onClick={() => setQ(el.Language)}
        Language={el.Language}
      >
        {' '}
        {el.Language}{' '}
      </button> */
  }
  return (
    <div className='Languages'>
      <button
        type='button'
        onClick={() => groupQuestions('Javascript')}
        name='Javascript'
      >
        Javascript
      </button>

      <button type='button' onClick={() => groupQuestions('HTML')} name='HTML'>
        HTML
      </button>
      <br />
    </div>
  );
};

export default Chapters;
