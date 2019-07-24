import React from "react";
import ToDoForm from "./ToDoForm.js";

const TaskList = props => {
  const { tasks } = props;
  return (
    <ol id = 'todos-ol'>
      {tasks.map((el, index) => {
        return (
          <div key={index}>
            <ToDoForm {...props} el={el} index={index} />
          </div>
        );
      })}
    </ol>
  );
};

export default TaskList;
