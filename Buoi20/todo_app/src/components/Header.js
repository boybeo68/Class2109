import React, { useState } from 'react'

export default function Header(props) {
    const [inputValue, setinputValue] = useState(''); // ush
    const changeInput = (input) => {
        setinputValue(input.target.value)
    }
    return (
        <>
            <header>Todo App</header>
            <div className="inputField">
                <input value={inputValue} onChange={changeInput} type="text" name="task" id="task" placeholder="Add new Task" />
                <button style={{
                    opacity: inputValue.length > 0 ? 1 : 0.6,
                    pointerEvents: inputValue.length > 0 ? 'auto' : 'none'
                }} onClick={() => {
                    props.addTodo(inputValue);
                    setinputValue('')
                }} ><i className="fas fa-plus"></i></button>
            </div>
        </>
    )
}
