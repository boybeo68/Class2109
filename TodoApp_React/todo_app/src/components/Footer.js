import React from 'react'

function Footer(props) {
    return (
        <div className="footer">
            <span>You have <span className="pendingTask">{props.count}</span> pending task</span>
            <button>Clear all</button>
        </div>
    )
}

export default Footer
