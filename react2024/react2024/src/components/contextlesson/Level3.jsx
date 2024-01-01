import { OurContext } from "./ContextLesson"
import { useContext } from "react"
import Counter from "./Counter"

function Level3(props){

    const ctx = useContext(OurContext)

    console.log(ctx)

    return <Counter val={ctx.count} updateValue={ctx.addOne}/>
}

export default Level3