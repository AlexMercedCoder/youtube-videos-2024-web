import { useEffect, useState } from "react";

function Counter(){

    const [count, setCount] = useState(0)

    const addOne = () => setCount((c) => c + 1 )

    const isDivBy5 = count % 5 === 0

    // if I want something to only happen
    useEffect(() => {}, [])

    // if you want to run the function on certain updates
    useEffect(() => {
        console.log(count)
        if(isDivBy5){
            console.log("divisible by 5")
        }
    }, [isDivBy5])

    // if you want to run a function when the component is removed
    useEffect(() => () => {console.log("components removed")})


    return <div>
        <h1>{count}</h1>
        <button onClick={addOne}>Click</button>
    </div>
}

export default Counter