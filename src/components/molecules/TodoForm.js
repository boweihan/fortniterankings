import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    title: '',
    description: '',
    status: '',
    dueDate: '',
  };

  handleChange = e => {
    let prop = e.target.name;
    let newState = this.state;
    newState[prop] = e.target.value;
    this.setState(newState);
  };

  validateInput = () => {
    let title = this.state.title.trim();
    let description = this.state.description.trim();
    let status = this.state.status.trim();
    let dueDate = this.state.dueDate.trim();

    if (!title || !description || !status || !dueDate) {
      // DO SOMETHING
      return;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validateInput();
    this.props.createTodo(this.state);
    this.setState({ title: '', description: '', status: '', dueDate: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="status"
          name="status"
          value={this.state.status}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="date"
          name="dueDate"
          value={this.state.dueDate}
          onChange={this.handleChange}
        />
        <input type="submit" value="Create" />
      </form>
    );
  }
}
export default TodoForm;
