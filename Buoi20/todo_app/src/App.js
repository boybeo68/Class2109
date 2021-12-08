
import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { api, createTodo, deleteTodoApi, getListTodo } from './config/api';

function App() {
  const [todoList, settodoList] = useState([]);
  const addTodo = async (inputValue) => {
    try {
      await api.post(createTodo, {
        task: inputValue,
        isDone: false
      })
      getListTodos();
    } catch (error) {
      console.log(error);
    }
  }
  // ueh
  useEffect(() => {
    getListTodos();
  }, []);// array rỗng tương đương componentDidMount

  const getListTodos = async () => {
    try {
      let result = await api.get(getListTodo)
      console.log(result.status);
      settodoList(result.data)
    } catch (error) {
      alert('Có lỗi xảy ra', error)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await api.delete(`${deleteTodoApi}/${id}`)
      getListTodos()
    } catch (error) {
      console.log(error);
    }
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
