import React, { Component } from 'react';
import TodosList from './TodosList';
import Header from './Header';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: true,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          console.log('inside', { ...todo, completed: !todo.completed });
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        console.log('outside', todo);
        return todo;
      }),
    }));
  };

  // handleChange = (id) => {
  //   this.setState({
  //     todo: (this.state.todos[id - 1].completed =
  //       !this.state.todos[id - 1].completed),
  //   });
  // };

  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
        />
      </div>
    );
  }
}
export default TodoContainer;
