import usePokemon from "./usePokemon";
import AllPokemon from "./AllPokemon";
import Counter from "./Counter";
import { useState } from "react";
function FetchLesson() {
  const pokemon = usePokemon();

  const [removed, setRemoved] = useState(false);

  if (removed) {
    return (
      <>
        <AllPokemon pokemon={pokemon} />
      </>
    );
  }

  return (
    <>
      <Counter />
      <AllPokemon pokemon={pokemon} />
      <button onClick={() => setRemoved(true)}>Remove Counter</button>
    </>
  );
}

export default FetchLesson;
