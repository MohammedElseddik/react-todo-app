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

  // handleChange = (id) => {
  //   this.setState({
  //     todo: (this.state.todos[id - 1].completed =
  //       !this.state.todos[id - 1].completed),
  //   });
  // };

  handleChange = (id) => {
    this.setState((prevState) => {
      console.log(prevState.todos);
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
