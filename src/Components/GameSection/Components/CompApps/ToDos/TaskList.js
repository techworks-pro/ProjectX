import React from "react";
import ToDoForm from "./ToDoForm.js";

const TaskList = props => {
  const { tasks } = props;
  return (
    <ol id = 'todo-ul'>
      {tasks.map((el, index) => {
        return <ToDoForm {...props} el={el} index={index} />;
      })}
    </ol>
  );
};

export default TaskList;