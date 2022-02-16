import { useSelector }  from 'react-redux';
import TodoListItem     from './TodoListItem/TodoListItem';

function TodoList() {
  const todos = useSelector(state => state.todos);

  const renderedTodos = todos.map(todo => (
    <TodoListItem
      key={todo.id}
      name={todo.name}
      isCompleted={todo.isCompleted}
    />
  ));

  return (
    <div>
      <ul>{renderedTodos}</ul>
      <button>Clear Completed</button>
    </div>
  )
}

export default TodoList;