import { useRef } from "react"

function Form2 (){

    const nameInput = useRef(null)
    const ageInput = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
     
        console.log(nameInput)
        console.log(ageInput)

        const name = nameInput.current.value
        const age = ageInput.current.value

        console.log(name, age)
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="name" ref={nameInput}/>
        <input type="number" name="age" ref={ageInput}/>
        <button>Submit</button>
    </form>
}

export default Form2