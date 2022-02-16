import { getId } from '../utils/helpers';

const initialState = {
  todos: [
    { id: getId(), name: 'Wash Car', isCompleted: false },
    { id: getId(), name: 'Buy more milk', isCompleted: false },
    { id: getId(), name: 'Clean the kitchen', isCompleted: false },
  ]
}

function rootReducer(state=initialState, payload) {
  return state;
}

export default rootReducer;