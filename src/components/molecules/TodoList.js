import React, { Component } from 'react';
import Todo from 'components/atoms/Todo';

class TodoList extends Component {
  render() {
    let todos = this.props.todos;
    let todoNodes = todos.map(todo => {
      return (
        <Todo key={todo._id} data={todo} deleteTodo={this.props.deleteTodo} />
      );
    });
    return <div>{todoNodes}</div>;
  }
}
export default TodoList;
