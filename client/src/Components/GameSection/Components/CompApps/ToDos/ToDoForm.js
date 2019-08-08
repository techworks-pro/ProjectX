import React from 'react';
import './ToDosApp.css';

const ToDoForm = props => {
  const {
    deleteTask,
    editTask,
    pressEdit,
    handleChange,
    el,
    index,
    key
  } = props;
  return (
    <div className='d-flex m-1' key={key}>
      <li className='pl-0' key={key}>
        {pressEdit[index] ? (
          <input
            type='text'
            defaultValue={el}
            onChange={e => handleChange(e)}
            className='form-control'
          />
        ) : (
          el
        )}
      </li>
      <button
        type='submit'
        onClick={() => deleteTask(index)}
        className='btn btn-success ml-1'
      >
        Delete
      </button>
      <button
        type='submit'
        onClick={() => editTask(index)}
        className='btn btn-success ml-1'
      >
        {pressEdit[index] ? 'Update' : 'Edit'}
      </button>
    </div>
  );
};

export default ToDoForm;
