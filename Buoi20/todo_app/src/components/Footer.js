import React from 'react'

export default function Footer(props) {
    return (
        <div className="footer">
            <span>You have <span className="pendingTask">{props.todoList.length}</span> pending task</span>
            <button>Clear all</button>
        </div>
    )
}
