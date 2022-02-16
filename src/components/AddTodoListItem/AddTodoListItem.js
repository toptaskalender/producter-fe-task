import { useState }     from 'react';
import { useDispatch }  from 'react-redux';
import { createTodo }   from '../../store/actionCreators';
import './addTodoListItem.css';

function AddTodoListItem() {
  const [todo, setTodo] = useState('');
  const dispatch        = useDispatch();

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    const isInputEmpty = todo.trim() === '';
    e.preventDefault();

    if (isInputEmpty) return;
    
    dispatch(createTodo(todo));
    setTodo('');
  }

  return (
    <div className='add-todo-list-item-container'>
      <form 
        onSubmit={handleSubmit}
        className='add-todo-list-item'
      >
        <input 
          type="text"
          placeholder="Enter Todo"
          value={todo}
          onChange={handleChange}
          className='add-todo-list-item__input'
        />
        <button
          className='btn btn--add-todo-list-item'
        >
          Create Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodoListItem;