// @flow
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { PokemonDetail } from "../../query/PokemonDetail";
import Error from "../../components/Error";
import SpinningPokeball from "../../components/SpinningPokeball";
import Details from "./Details";

export default function Detail(): React.Node {
  const { name } = useParams();

  React.useEffect(() => {
    document.title = `${name} | Pokédex`;
  }, [name]);

  const { loading, error, data = {} } = useQuery(PokemonDetail, {
    variables: { name },
  });

  if (error) return <Error />;
  if (loading) return <SpinningPokeball fullscreen />;

  return data && <Details data={data.pokemon} />;
}
