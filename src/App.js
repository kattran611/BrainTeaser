import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoForm from '/.TodoForm';

class App extends Component {
  state = {todos: []}
  render() {
    const {todos} = this.state
    return (
    //   <List name="My Todo List" items={todos} />
      <div>
        <TodoForm/>
        <List name="My Todo List" items={todos}/>

      </div>
    );
  }
}

export default App;
