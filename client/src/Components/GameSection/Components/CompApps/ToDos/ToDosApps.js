import React, { Component } from 'react';
import TaskList from './TaskList';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {

      tasks: [],
      pressEdit: [],
      editedTask: '',
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
      e.target.taskName.value = '';
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
    if (this.state.pressEdit[id] && this.state.currentTaskIsEditing) {
      this.setState({
        tasks: [
          ...this.state.tasks.slice(0, id),
          this.state.editedTask,
          ...this.state.tasks.slice(id + 1)
        ],
        currentTaskIsEditing: false
      });
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
      <div className="container border rounded p-3">

        <form onSubmit={this.addTask} className="form-group d-flex">
            <label htmlFor="taskName">Task Name:</label>
              <input
                name="taskName"
                type="text"
                placeholder="Add todo here!"
                className="form-control"
              />
              <button type="submit" className="btn btn-success ml-1">
                Add Task
              </button>
        </form>

        <TaskList
          tasks={this.state.tasks}
          pressEdit={this.state.pressEdit}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          editCurrentTask={this.editCurrentTask}
        />
      </div>
    );
  }
}

export default ToDoList;
