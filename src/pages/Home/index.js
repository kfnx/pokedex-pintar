// @flow
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import SpinningPokeball from "../../components/SpinningPokeball";
import { PokemonList } from "../../query/PokemonList";
import ListPokemons from "./ListPokemons";

export default function Home(): React.Node {
  const { loading, error, data } = useQuery(PokemonList, {
    variables: {
      first: 15,
    },
  });
  const pokemonsFetched = data ? data.pokemons : [];

  return (
    <div>
      <h2>Pokedex</h2>
      <ListPokemons pokemons={pokemonsFetched} />
      {loading && <SpinningPokeball />}
    </div>
  );
}
