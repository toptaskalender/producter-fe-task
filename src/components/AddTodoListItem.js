import { useState }     from 'react';
import { useDispatch }  from 'react-redux';
import { createTodo }   from '../store/actionCreators';

function AddTodoListItem() {
  const [todo, setTodo] = useState('');
  const dispatch        = useDispatch();

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTodo('');
    dispatch(createTodo(todo));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter Task"
          value={todo}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoListItem;