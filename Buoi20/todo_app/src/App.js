
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const [todoList, settodoList] = useState([]);
  const addTodo = async (inputValue) => {
    await axios.post('https://61b02a623e2aba0017c49636.mockapi.io/Todolist', {
      task: inputValue,
      isDone: false
    })
    getListTodos();
  }
  // ueh
  useEffect(() => {
    getListTodos();
  }, []);// array rỗng tương đương componentDidMount

  const getListTodos = async () => {
    let result = await axios.get('https://61b02a623e2aba0017c49636.mockapi.io/Todolist')
    settodoList(result.data)
  }
  const deleteTodo = async (id) => {
    await axios.delete(`https://61b02a623e2aba0017c49636.mockapi.io/Todolist/${id}`)
    getListTodos()
  }

  return (
    <div className="wrapper">
      <Header addTodo={addTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <Footer todoList={todoList} />
    </div>
  );
}

export default App;
