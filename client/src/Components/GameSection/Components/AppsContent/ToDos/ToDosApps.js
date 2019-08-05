import React, { Component } from "react";
import TaskList from "./TaskList";
import './ToDosApp.css';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      pressEdit: [],
      editedTask: "",
      currentTaskIsEditing: false
    };
  }

  editCurrentTask = e => {
    this.setState({
      editedTask: e.target.value,
      currentTaskIsEditing: true
    });
  };

  addTask = e => {
    e.preventDefault();
    if (e.target.taskName.value) {
      this.setState({
        tasks: [...this.state.tasks, e.target.taskName.value],
        pressEdit: new Array(this.state.tasks.length + 1).fill(false)
      });
      e.target.taskName.value = "";
    }
  };

  deleteTask = id => {
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, id),
        ...this.state.tasks.slice(id + 1)
      ],
      pressEdit: [
        ...this.state.pressEdit.slice(0, id),
        ...this.state.pressEdit.slice(id + 1)
      ]
    });
  };

  editTask = id => {
    if (this.state.pressEdit[id] === true) {
      if (this.state.currentTaskIsEditing === true) {
        this.setState({
          tasks: [
            ...this.state.tasks.slice(0, id),
            this.state.editedTask,
            ...this.state.tasks.slice(id + 1)
          ],
          currentTaskIsEditing: false
        });
      }
    }
    this.setState({
      pressEdit: [
        ...this.state.pressEdit.slice(0, id),
        !this.state.pressEdit[id],
        ...this.state.pressEdit.slice(id + 1)
      ]
    });
  };

  render() {
    return (
      <div className="todos-container">
        <form onSubmit={this.addTask} className="main-form">
          <label htmlFor="taskName">Task Name:</label>
          <input name="taskName" type="text" placeholder="Add todo here!" />
          <button type="submit">Add Task</button>
        </form>
        <TaskList
          tasks={this.state.tasks}
          pressEdit={this.state.pressEdit}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          editCurrentTask={this.editCurrentTask}
          className="tasklist"
        />
      </div>
    );
  }
}

export default ToDoList;
