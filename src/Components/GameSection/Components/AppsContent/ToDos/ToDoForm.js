import React from "react";

const ToDoForm = props => {
  const { deleteTask, editTask, pressEdit, editCurrentTask, el, index } = props;
  return (
    <div className="one-task">
      <li className = 'todos-one-task'>
        {pressEdit[index] ? (
          <input
            type="text"
            defaultValue={el}
            onChange={e => editCurrentTask(e)}
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
