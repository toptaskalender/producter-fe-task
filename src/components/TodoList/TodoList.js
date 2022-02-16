import { useSelector }      from 'react-redux';
import { useDispatch }      from 'react-redux';
import TodoListItem         from './TodoListItem/TodoListItem';
import {
  toggleCompletion,
  clearCompletedTodos
}                           from '../../store/actionCreators';
import './todoList.css';

function TodoList() {
  const dispatch    = useDispatch();
  const todos       = useSelector(state => state.todos);
  const hasAnyTodo  = todos.length !== 0;

  const handleTodoToggling = id => {
    dispatch(toggleCompletion(id));
  }
  
  const handleClearingCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  }

  const renderedTodos = todos.map(todo => (
    <TodoListItem
      key         = {todo.id}
      name        = {todo.name}
      isCompleted = {todo.isCompleted}
      onClick     = {() => handleTodoToggling(todo.id)}
    />
  ));

  if (!hasAnyTodo) {
    return (
      <div className='todo-list-container'>
        <p>There is no todo to display</p>
      </div>
    )
  }

  return (
    <div className='todo-list-container'>
      <ul className='todo-list'>
        {renderedTodos}
      </ul>
      <button 
        onClick={handleClearingCompletedTodos}
        className='btn btn-clear-completed-todos'
      >
        Clear Completed Todos
      </button>
    </div>
  )
}

export default TodoList;