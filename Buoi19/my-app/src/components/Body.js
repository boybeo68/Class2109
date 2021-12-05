import { useState, useEffect } from "react";

// hook
export default function Body() {
  const [count, setCount] = useState(0); //ush
  const [todoList, settodoList] = useState([
    { id: 1, task: "task1", isDone: false },
    { id: 2, task: "task2", isDone: false },
    { id: 3, task: "task3", isDone: false },
  ]);
  // ueh
  useEffect(() => {
    console.log("Didmout");
    //
    return () => {
      console.log("WillUnMount");
    };
  }, []); // dependci
  // - depen là mảng rỗng thì chỉ chạy vào khi mounting
  // Khi có depen sẽ tương đương với didupdate

  const inCreeCount = (value) => {
    setCount(count + value);
  };
  const addTask = () => {
    const newTask = {
      id: todoList.length + 1,
      task: `task${todoList.length + 1}`,
      isDone: false,
    };
    settodoList([...todoList, newTask]);
  };
  return (
    <div className="body">
      <p>Count</p>
      <p>{count}</p>
      <button onClick={() => inCreeCount(2)}>inCreeCount</button>
      <ul>
        {todoList.map((item, index) => {
          return <li key={item.id + ""}>{item.task}</li>;
        })}
      </ul>
      <button onClick={addTask}>AddTask</button>
    </div>
  );
}
