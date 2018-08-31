import * as actionTypes from './actionTypes';

const initialState = {
  message: 'Hello g87!!',
  newTodo: '',
  todos: [{
    title: 'Learn React',
    done: false
  }, {
    title: 'Learn JSX',
    done: false
  }]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case actionTypes.NEW_TODO_CHANGED:
    return {
      ...state,
      newTodo: action.newTodo
    };
  case actionTypes.ADD_NEW_TODO:
    return {
      ...state,
      todos: [
        ...state.todos,
        action.todo
      ],
      newTodo: ''
    };
  case actionTypes.REMOVE_TODO:
    return {
      ...state,
      todos: state.todos.filter((_, i) => i !== action.index)
    };
  case actionTypes.TOGGLE_TODO_DONE:
    return {
      ...state,
      todos: state.todos.map((todo, i) => {
        if (i === action.index) {
          return {
            ...todo,
            done: !todo.done
          };
        }
        return todo;
      })
    };
  case actionTypes.MARK_ALL_DONE:
    return {
      ...state,
      todos: state.todos.map(todo => {
        return {
          ...todo,
          done: true
        };
      })
    };
  default: 
    return state;
  }
}
