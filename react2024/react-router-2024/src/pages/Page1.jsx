import { useSearchParams } from "react-router-dom"

function Page1(){

    const [searchParams, setSearchParams] = useSearchParams()
    
    console.log(searchParams.get("first_input"))
    console.log(searchParams.get("second_input"))

    return <div>
        <h1>Page 1</h1>
    </div>
}

export default Page1