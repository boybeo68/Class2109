import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Todolist from './components/Todolist';
import Footer from './components/Footer';
import { api } from './config/api';

function App() {
  const [listTask, setListTask] = useState([]);
  useEffect(() => {
    getlistTask()
  }, []);

  const addTask = async (input) => {
    try {
      await api.post('https://61b02a623e2aba0017c49636.mockapi.io/Todo', {
        task: input,
        isDone: false
      })
      getlistTask()
    } catch (error) {
      console.log('bb error');
    }
  }
  const getlistTask = async () => {
    try {
      let listTask = await api.get('Todo')
      console.log(listTask);
      setListTask(listTask.data)
    } catch (error) {
      console.log('bb error');
    }
  }

  const deleteTask = async (id) => {
    try {
      let taskDelete = await api.delete(`Todo/${id}`)
      console.log(taskDelete.data);
      getlistTask()
    } catch (error) {
      console.log('bb error');
    }
  }
  return (
    <div className="wrapper">
      <Header addTask={addTask} />
      <Todolist deleteTask={deleteTask} listTask={listTask} />
      <Footer count={listTask.length} />
    </div>
  );
}

export default App;
