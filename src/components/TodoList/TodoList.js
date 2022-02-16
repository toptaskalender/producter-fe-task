import { useSelector }      from 'react-redux';
import { useDispatch }      from 'react-redux'
import TodoListItem         from './TodoListItem/TodoListItem';
import {
  toggleCompletion,
  clearCompletedTodos
}                           from '../../store/actionCreators';
import './todoList.css';

function TodoList() {
  const dispatch  = useDispatch();
  const todos     = useSelector(state => state.todos);

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