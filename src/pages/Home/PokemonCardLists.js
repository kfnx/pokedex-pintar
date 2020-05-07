// @flow
import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const CardListContainer = styled.div`
  min-height: 200px;
  max-width: 930px;
  justify-content: space-around;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

type PokemonCardProps = {
  pokemons: Array<any>,
  filter: Array<any>,
};

export default function PokemonCardLists({
  pokemons,
  filter,
}: PokemonCardProps): React.Node {
  return (
    <CardListContainer>
      {filter.length > 0
        ? pokemons.map(
            (pokemon) =>
              filter.some((item) => pokemon.types.includes(item)) && (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
              )
          )
        : pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
    </CardListContainer>
  );
}
