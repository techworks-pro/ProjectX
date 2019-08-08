import React, { Component } from 'react';
import TaskList from './TaskList';
import './ToDosApp.css';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: '',
      pressEdit: []
    };
  }

  handleChange = e => {
    this.setState({
      currentToDo: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    if (e.target.taskName.value) {
      this.setState({
        todos: [...this.state.todos, e.target.taskName.value],
        pressEdit: new Array(this.state.todos.length + 1).fill(false) //[false,true,false,false]
      });
      e.target.taskName.value = '';
    }
  };

  deleteTask = id => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, id),
        ...this.state.todos.slice(id + 1)
      ],
      pressEdit: [
        ...this.state.pressEdit.slice(0, id),
        ...this.state.pressEdit.slice(id + 1)
      ]
    });
  };

  editTask = id => {
    this.setState({
      pressEdit: [
        ...this.state.pressEdit.slice(0, id),
        !this.state.pressEdit[id],
        ...this.state.pressEdit.slice(id + 1)
      ]
    });
    if (this.state.pressEdit[id] === true) {
      this.setState({
        todos: [
          ...this.state.todos.slice(0, id),
          this.state.currentToDo,
          ...this.state.todos.slice(id + 1)
        ]
      });
    }
  };

  render() {
    return (
      <div className='container border rounded p-3'>
        <form onSubmit={this.addItem}>
          <div className='form-group d-flex'>
            <label htmlFor='taskName'>Task Name:</label>
            <>
              <input
                name='taskName'
                type='text'
                placeholder='Add todo here!'
                className='form-control'
              />
            </>
            <>
              <button type='submit' className='btn btn-success ml-1'>
                Add Task
              </button>
            </>
          </div>
        </form>
        <TaskList
          tasks={this.state.todos}
          pressEdit={this.state.pressEdit}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          handleChange={this.handleChange}
          className=''
        />
      </div>
    );
  }
}

export default ToDoList;
