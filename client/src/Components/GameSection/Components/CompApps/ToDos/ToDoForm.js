import React from "react";
import './ToDosApp.css';

const ToDoForm = props => {
  const { deleteTask, editTask, pressEdit, handleChange, el, index } = props;
  return (
    <div className="one-task" key={index}>
      <li className = 'todos-one-task'>
        {pressEdit[index] ? (
          <input
            type="text"
            defaultValue={el}
            onChange={e => handleChange(e)}
          />
        ) : (
          el
        )}
      </li>
      <button type="submit" onClick={() => deleteTask(index)}>
        Delete
      </button>
      <button type="submit" onClick={() => editTask(index)}>
        {pressEdit[index] ? "Update" : "Edit"}
      </button>
    </div>
  );
};

export default ToDoForm;