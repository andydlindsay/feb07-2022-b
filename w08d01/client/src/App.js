import './App.css';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';
import axios from 'axios';

// const todosArr = [
//   {
//     id: 'abc',
//     todo: 'Do the dishes'
//   },
//   {
//     id: 'def',
//     todo: 'Work on today\'s assignments'
//   },
//   {
//     id: 'ghi',
//     todo: 'Get McDonald\'s and make Babaganoush'
//   },
// ];

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  const deleteTodo = (id) => {
    console.log('id in deleteTodo', id);
    const newTodos = todos.filter((todo) => todo.id !== id);

    axios.delete(`/todos/${id}`)
      .then(() => {
        console.log('deleted');
        setTodos(newTodos);
      });
  };

  return (
    <div className="App">
      <h2>Welcome to the Todo List</h2>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
