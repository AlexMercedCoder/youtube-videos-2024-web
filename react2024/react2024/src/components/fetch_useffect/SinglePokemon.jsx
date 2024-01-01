function SinglePokemon({ poke }) {
  return (
    <div>
      <h2>{poke.name}</h2>
      <img src={poke.img} />
    </div>
  );
}

export default SinglePokemon;
