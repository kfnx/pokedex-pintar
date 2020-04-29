// @flow
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { PokemonList } from "../../query/PokemonList";
import Error from "../../components/Error";
import SpinningPokeball from "../../components/SpinningPokeball";
import PokemonTypesFilter from "../../components/PokemonTypesFilter";
import PokemonCards from "./PokemonCards";
import HeadBar from "./HeadBar";

export default function Home(): React.Node {
  const [variables, setVariables] = React.useState({
    first: 18,
  });

  const { loading, error, data, fetchMore } = useQuery(PokemonList, {
    variables,
  });

  const pokemonsFetched = data ? data.pokemons : [];
  // our graphql api has limit (150 Pokemon)
  const limitExceed = pokemonsFetched.length > 150;

  const handleScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    if (window.innerHeight + scrollTop < offsetHeight - 100) return;

    if (variables.first <= 150) {
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
    }
  }, [fetchMore, variables]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const [displayFilter, setDisplayFilter] = React.useState(false);
  const closeFilter = () => {
    setDisplayFilter(false);
  };
  const openFilter = () => {
    setDisplayFilter(true);
  };

  const { filter } = useParams();
  const filterArray = filter ? filter.split("&") : [];

  // trigger fetch for use case when filter result
  // not showing enough pokemon to reach bottom scroll to fetch
  if (
    !loading &&
    document.body.offsetHeight < window.innerHeight &&
    !limitExceed
  ) {
    fetchMore({
      variables: {
        ...variables,
        first: variables.first + 15,
      },
      updateQuery: (prev, { fetchMoreResult, variables }) => {
        setVariables(variables);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons],
        });
      },
    });
  }

  if (error) return <Error />;

  return (
    <React.Fragment>
      <HeadBar openFilter={openFilter} activeFilters={filterArray} />
      <PokemonCards pokemons={pokemonsFetched} filter={filterArray} />
      {(loading || !limitExceed) && <SpinningPokeball />}
      <PokemonTypesFilter display={displayFilter} onClose={closeFilter} />
    </React.Fragment>
  );
}
