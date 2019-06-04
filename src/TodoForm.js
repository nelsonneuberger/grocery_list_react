import React from 'react';

class TodoForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    e.preventDefault({ name: e.target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder="Add item"
        />
      </form>
    )
  }
}

export default TodoForm;