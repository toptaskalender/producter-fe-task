import TodoListHeader   from './components/TodoListHeader';
import TodoList         from './components/TodoList/TodoList';
import AddTodoListItem  from './components/AddTodoListItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoListHeader />
      <TodoList />
      <AddTodoListItem />
    </div>
  );
}

export default App;
