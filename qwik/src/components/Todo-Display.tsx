import { component$ , QRL, $} from '@builder.io/qwik';

interface TodoProps {
    todos: Array<any>,
    addTodo: QRL,
    removeTodo: QRL

}

export default component$<TodoProps>(({todos, addTodo, removeTodo}) => {


    const handleSubmit = $((event) => {
        const formData = new FormData(event.target)
        const todo = formData.get("todo")
        addTodo(todo)
    })

    return <div>
        <main>
            {todos.map((t, i) => <h2 key={i} onClick$={() => removeTodo(i)}>
                {t}</h2>)}
        </main>
        <form onSubmit$={handleSubmit} preventdefault:submit>
            <input type="text" name="todo" />
            <button>Submit</button>
        </form>
    </div>
})