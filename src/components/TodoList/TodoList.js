import { useSelector }      from 'react-redux';
import { useDispatch }      from 'react-redux'
import TodoListItem         from './TodoListItem/TodoListItem';
import {
  toggleCompletion,
  clearCompletedTodos
}                           from '../../store/actionCreators';

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
      key={todo.id}
      name={todo.name}
      isCompleted={todo.isCompleted}
      onClick={() => handleTodoToggling(todo.id)}
    />
  ));

  return (
    <div>
      <ul>{renderedTodos}</ul>
      <button onClick={handleClearingCompletedTodos}>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList;