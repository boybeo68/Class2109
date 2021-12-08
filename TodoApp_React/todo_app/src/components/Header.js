import React, { useState } from 'react'

function Header(props) {
    const [input, setinput] = useState('');
    const onChangeTextInput = (value) => {
        setinput(value.target.value)
    }
    return (
        <>
            <header>Todo App</header>
            <div className="inputField">
                <input value={input} onChange={onChangeTextInput} type="text" name="task" id="task" placeholder="Add new Task" />
                <button style={{ opacity: input.length > 0 && 1 }} onClick={() => {
                    props.addTask(input)
                    setinput('')
                }} ><i className={`fas fa-plus ${input.length > 0 && 'activeButton'}`}></i></button>
            </div>
        </>
    )
}
export default Header
