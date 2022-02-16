import './todoListItem.css'

function TodoListItem({ name, isCompleted, onClick }) {
  return (
    <li
      className={isCompleted ? 'completed' : ''}
      onClick={onClick}
    >
      {name}
    </li>
  )
}

export default TodoListItem;