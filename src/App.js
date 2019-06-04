import React, { Component, } from 'react';
import List from './List';
import TodoForm from './TodoForm';
class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Frozen Pizza", complete: true, },
      { id: 2, name: "1% Milk", complete: false, },
      { id: 3, name: "Toilet Paper", complete: false, },
      { id: 4, name: "Apples", complete: false, },
    ]
  }

  getUniqId = () => {
    // Replacing DB with this
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

handleClick = (id)  => {
  const { todos } = this.state;
  this.setState({
    todo: todos.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
  })
}

addItem = (name) => {
  const { todos } = this.state;
  const todo = { name, id: this.getUniqId() , complete: false }
  this.setState({ todos: [todo, ...todos] });
}

render () {
  const { todos } = this.state;

  return (
    <div>
      <TodoForm addItem={this.addItem} />
      <List name="Grocery List" items={todos} todoClick={this.handleClick} />
    </div>
  )
}
}


  // render() {
  //   const { todos } = this.state;

  //   return (
  //     <List name="Grocery List" items={todos} />
  //   );
  // }

export default App;