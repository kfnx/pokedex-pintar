// @flow
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { PokemonList } from "../../query/PokemonList";
import PokemonCards from "./PokemonCards";
import Error from "../../components/Error";
import SpinningPokeball from "../../components/SpinningPokeball";
import PokemonTypesFilter from "../../components/PokemonTypesFilter";

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

  const [displayFilter, setDisplayFilter] = React.useState(false);
  const closeFilter = () => {
    setDisplayFilter(false);
  };
  const openFilter = () => {
    setDisplayFilter(true);
  };

  const { filter } = useParams();
  const filterArray = filter ? filter.split("&") : [];

  if (error) return <Error />;

  return (
    <React.Fragment>
      <h2>
        Pokédex Pintar <button onClick={openFilter}>filter type</button>
      </h2>
      {filter && JSON.stringify(filter)}
      <PokemonCards pokemons={pokemonsFetched} filter={filterArray} />
      {(loading || !limitExceed) && <SpinningPokeball />}
      <PokemonTypesFilter display={displayFilter} onClose={closeFilter} />
    </React.Fragment>
  );
}
