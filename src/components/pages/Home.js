import React, { Component } from 'react';
// import constants from 'constants/constants';
import api from 'services/api';

import TodoList from 'components/molecules/TodoList';
import TodoForm from 'components/molecules/TodoForm';

class Home extends Component {
  state = {
    todos: [],
  };

  populateTodos = async () => {
    let todos = await api.getTodos();
    this.setState({ todos });
  };

  createTodo = async todo => {
    let data = await api.createTodo(todo);
    if (data) {
      let createdTodo = data.todo;
      let newState = this.state;
      newState.todos.push(createdTodo);
      this.setState(newState);
    }
  };

  deleteTodo = async id => {
    let data = await api.deleteTodo(id);
    if (data) {
      console.log(data);
    }
  };

  componentDidMount() {
    this.populateTodos();
    // polling! one line alternative to websockets :)
    // setInterval(this.populateTodos, constants.pollInterval);
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default Home;
