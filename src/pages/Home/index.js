// @flow
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import SpinningPokeball from "../../components/SpinningPokeball";
import { PokemonList } from "../../query/PokemonList";
import PokemonCards from "./PokemonCards";
import Error from "../../components/Error";

export default function Home(): React.Node {
  const [variables, setVariables] = React.useState({
    first: 18,
  });
  const { loading, error, data, fetchMore } = useQuery(PokemonList, {
    variables,
  });

  const handleScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    if (window.innerHeight + scrollTop < offsetHeight - 100) return;

    fetchMore({
      variables: {
        ...variables,
        first: variables.first + 12,
      },
      updateQuery: (prev, { fetchMoreResult, variables }) => {
        setVariables(variables);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons],
        });
      },
    });
  }, [fetchMore, variables]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const pokemonsFetched = data ? data.pokemons : [];
  const limitExceed = pokemonsFetched.length > 150; // our graphql api has limit

  if (error) return <Error />;

  return (
    <div>
      <h2>Pokédex Pintar</h2>
      <PokemonCards pokemons={pokemonsFetched} />
      {!limitExceed && <SpinningPokeball />}
    </div>
  );
}
