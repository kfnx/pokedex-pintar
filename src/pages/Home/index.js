// @flow
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { PokemonList } from "../../query/PokemonList";

export default function Home(): React.Node {
  const { loading, error, data } = useQuery(PokemonList, {
    variables: {
      first: 15,
    },
  });
  return <div>Pokedex {JSON.stringify(data)}</div>;
}
