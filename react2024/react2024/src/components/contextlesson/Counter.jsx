function Counter({val, updateValue}){
    return <div>
        <h1>{val}</h1>
        <button onClick={updateValue}>Click</button>
    </div>
}

export default Counter