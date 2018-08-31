import * as actionTypes from './actionTypes';

export function newTodoChanged(newTodo) {
  return {
    type: actionTypes.NEW_TODO_CHANGED,
    newTodo
  };
}

export function addNewTodo(todo) {
  return {
    type: actionTypes.ADD_NEW_TODO,
    todo
  };
}

export function removeTodo(index) {
  return {
    type: actionTypes.REMOVE_TODO,
    index
  };
}

export function toggleTodoDone(index) {
  return {
    type: actionTypes.TOGGLE_TODO_DONE,
    index
  };
}

export function markAllDone() {
  return {
    type: actionTypes.MARK_ALL_DONE
  };
}
