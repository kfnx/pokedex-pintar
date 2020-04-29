// @flow
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import SpinningPokeball from "../../components/SpinningPokeball";
import { PokemonList } from "../../query/PokemonList";

export default function Home(): React.Node {
  const { loading, error, data } = useQuery(PokemonList, {
    variables: {
      first: 15,
    },
  });
  return (
    <div>
      <h2>Pokedex</h2> {JSON.stringify(data)}
      {loading && <SpinningPokeball />}
    </div>
  );
}
