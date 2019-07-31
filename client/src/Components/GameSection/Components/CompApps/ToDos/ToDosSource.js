import React from 'react';
import Highlight from 'react-highlight-js';

const ToDosSource = () => {
    return (
        <div>
            <Highlight language="javascript">
{`
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

export default TaskList;`}
            </Highlight>
        </div>
        )
}

export default ToDosSource;