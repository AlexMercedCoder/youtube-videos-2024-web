import { useState, useEffect } from "react";

function usePokemon(){
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      fetch("https://dummydata.netlify.app/pokedex.json")
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data.pokemon);
        });
    }, []);

    return pokemon
}

export default usePokemon