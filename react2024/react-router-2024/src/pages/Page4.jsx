import { useParams, useLoaderData } from "react-router-dom"

function Page4(){

    const params = useParams()
    console.log("params", params)

    const pokemon = useLoaderData()
    console.log(pokemon)

    return <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img}/>
    </div>
}

export default Page4