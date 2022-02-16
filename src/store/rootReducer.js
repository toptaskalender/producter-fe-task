import * as actionTypes from './actionTypes';
import { getId }        from '../utils/helpers';

const initialState = {
  todos: [
    { id: getId(), name: 'Wash the Car', isCompleted: false },
    { id: getId(), name: 'Buy More Milk', isCompleted: false },
    { id: getId(), name: 'Clean the Kitchen', isCompleted: true },
  ]
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_TODO_COMPLETION: {
      const todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo;
      });

      return { todos }
    }
    case actionTypes.CLEAR_COMPLETED_TODOS: {
      const todos = state.todos.filter(todo => todo.isCompleted === false);
      return { todos }
    }
    case actionTypes.CREATE_TODO: {
      const todo = { id: getId(), name: action.payload.todo, isCompleted: false }
      return { todos: [...state.todos, todo] }
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;