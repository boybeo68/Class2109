import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <span>You have <span className="pendingTask">4</span> pending task</span>
            <button>Clear all</button>
        </div>
    )
}
