import * as actionTypes from './actionTypes';

export const toggleCompletion = id => {
  return {
    type    : actionTypes.TOGGLE_TODO_COMPLETION,
    payload : { id }
  }
}

export const clearCompletedTodos = () => {
  return {
    type    : actionTypes.CLEAR_COMPLETED_TODOS
  }
}

export const createTodo = todo => {
  return {
    type    : actionTypes.CREATE_TODO,
    payload : { todo }
  }
}