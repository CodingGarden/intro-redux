import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

import * as actions from '../store/actions';

class TodoApp extends Component {
  newTodoChanged(event) {
    this.props.onNewTodoChanged(event.target.value);
  }

  formSubmitted(event) {
    event.preventDefault();

    this.props.onAddNewTodo({
      title: this.props.newTodo,
      done: false
    });
  }

  toggleTodoDone(event, index) {
    this.props.onToggleTodoDone(index);
  }

  removeTodo(index) {
    this.props.onRemoveTodo(index);
  }

  allDone() {
    this.props.onMarkAllDone();
  }

  render() {
    return (
      <div className="App">
        <h3>{this.props.message}</h3>
        <NewTodoForm
            newTodo={this.props.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.newTodoChanged.bind(this)} />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.props.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged: newTodo => {
      dispatch(actions.newTodoChanged(newTodo));
    },
    onAddNewTodo: todo => {
      dispatch(actions.addNewTodo(todo));
    },
    onRemoveTodo: index => {
      dispatch(actions.removeTodo(index));
    },
    onToggleTodoDone: index => {
      dispatch(actions.toggleTodoDone(index));
    },
    onMarkAllDone: () => {
      dispatch(actions.markAllDone());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
