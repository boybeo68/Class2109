
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {

  const addTodo = (inputValue) => {
    axios.post('https://61b02a623e2aba0017c49636.mockapi.io/Todolist', {
      task: inputValue,
      isDone: false
    })
  }
  
  return (
    <div className="wrapper">
      <Header addTodo={addTodo} />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
