import React from 'react'

export default function TodoList(props) {
    return (
        <ul className="todoList">
            {props.todoList && props.todoList.map(item => {
                return (
                    <li>
                        {item.task}
                        <span onClick={() => {
                            props.deleteTodo(item.id)
                        }} className="icon"><i className="fas fa-trash"></i></span>
                    </li>
                )
            })}
        </ul>
    )
}
