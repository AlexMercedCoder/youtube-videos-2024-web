import { useRef } from "react"

function TodoForm(props){

    const inputRef = useRef(null)

    const handleClick = () => {
        const text = inputRef.current.value
        props.addTodo(text)
        inputRef.current.value = ""
    }

    return <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Add Todo</button>
    </div>
}

export default TodoForm