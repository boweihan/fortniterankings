import React, { Component } from 'react';

class Todo extends Component {
  render() {
    let data = this.props.data;
    return (
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.status}</p>
        <p>{data.dueDate}</p>
        <button onClick={id => this.props.deleteTodo(data._id)}>Delete</button>
      </div>
    );
  }
}
export default Todo;
