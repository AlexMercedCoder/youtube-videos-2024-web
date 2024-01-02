export async function pokemonLoader({request, params}){
    
    console.log(params)
    const url = "https://dummydata.netlify.app/pokedex.json"
    const response = await fetch(url)
    const data = await response.json()
    const id = parseInt(params.param)
    const pokemon = data.pokemon.find((p)=> p.id === id )
    console.log(pokemon)

    return pokemon

}