import { component$, useSignal, $ } from '@builder.io/qwik';
import TodoDisplay from './Todo-Display';

export default component$(() => {

    const todos = useSignal([])

    console.log(todos.value)

    const addTodo = $((todo: String) => {
        console.log(todo)
        const newTodos = [...todos.value]
        newTodos.push(todo)
        todos.value = newTodos
    })

    const removeTodo = $((index: Number) => {
        const newTodos = [...todos.value]
        newTodos.splice(index, 1)
        todos.value = newTodos
    })


    return <TodoDisplay
    todos={todos.value}
    addTodo={addTodo}
    removeTodo={removeTodo}/>
})