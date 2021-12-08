import React from 'react'

function Todolist(props) {
    return (
        <ul className="todoList">
            {props.listTask && (props.listTask.map((item, index) => {
                return (
                    <li key={item.id + ''}>
                        {item.task}
                        <span onClick={() => props.deleteTask(item.id)} className="icon"><i className="fas fa-trash"></i></span>
                    </li>
                )
            }))}
        </ul>
    )
}

export default Todolist
