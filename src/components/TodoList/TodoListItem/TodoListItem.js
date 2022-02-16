import './todoListItem.css';

function TodoListItem({ name, isCompleted, onClick }) {
  const isCompletedStyle = `${isCompleted ? 'completed' : ''}`;

  return (
    <li
      className={`todo-list__item ${isCompletedStyle}`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

export default TodoListItem;