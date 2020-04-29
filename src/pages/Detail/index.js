// @flow
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { PokemonDetail } from "../../query/PokemonDetail";

export default function Detail(): React.Node {
  const { name } = useParams();
  const { loading, error, data } = useQuery(PokemonDetail, {
    variables: { name },
  });
  return <div>Detail {!!name && JSON.stringify(data)}</div>;
}
