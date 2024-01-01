function Form1 (){

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        const formData = new FormData(event.target)
        const values = formData.values()
        console.log(formData.get("name"))
        console.log(formData.get("age"))
        for (let value of values){
            console.log(value)
        }
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <input type="number" name="age"/>
        <button>Submit</button>
    </form>
}

export default Form1