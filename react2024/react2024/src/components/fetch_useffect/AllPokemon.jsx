import SinglePokemon from "./SinglePokemon";

function AllPokemon(props) {
  if (props.pokemon.length === 0) {
    return <h1>...Loading Pokemon</h1>;
  } else {
    return props.pokemon.map((p) => <SinglePokemon key={p.id} poke={p}/>);
  }
}

export default AllPokemon