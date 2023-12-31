import {useState} from "react"
import TodoDisplay from "./TodoDisplay"
import TodoForm from "./TodoForm"

function TodoList(){

    const [todos, setTodos] = useState([])

    // take a string, add a todo
    const addTodos = (newTodo) => {
        // create the new todo object
        const todo = {
            text: newTodo,
            completed: false
        }
        // make a copy of todos state with new todo
        const newTodos = [...todos, todo]

        // set the state to the new array
        setTodos(newTodos)
    }

    const completeTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].completed = true
        setTodos(newTodos)
    }

    return <main>
        <section id="tododisplay">
            {todos.map((todo, index) => <TodoDisplay 
            todo={todo} 
            index={index} 
            key={index}
            completed={completeTodo}
            />)}
        </section>
        <section id="todoform">
            <TodoForm addTodo={addTodos}/>
        </section>
    </main>
}

export default TodoList