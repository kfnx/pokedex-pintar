// @flow
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import SpinningPokeball from "../../components/SpinningPokeball";
import { PokemonList } from "../../query/PokemonList";
import PokemonCards from "./PokemonCards";
import Error from "../../components/Error";

export default function Home(): React.Node {
  const { loading, error, data } = useQuery(PokemonList, {
    variables: {
      first: 15,
    },
  });

  if (error) return <Error />;

  const pokemonsFetched = data ? data.pokemons : [];

  return (
    <div>
      <h2>Pokédex Pintar</h2>
      {loading ? (
        <SpinningPokeball />
      ) : (
        <PokemonCards pokemons={pokemonsFetched} />
      )}
    </div>
  );
}
