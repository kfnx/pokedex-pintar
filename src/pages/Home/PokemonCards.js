// @flow
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { YELLOW_WARUNG } from "../../constants/colors.js";

const CardListContainer = styled.div`
  min-height: 200px;
  max-width: 930px;
  justify-content: space-around;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  text-align: center;
  width: 200px;
  padding: 16px;
  margin: 16px;
  border: 2px solid gainsboro;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: rotate(1deg);
    border: 2px solid ${YELLOW_WARUNG};
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin: 16px auto 8px auto;
`;

const Classification = styled.p`
  color: slategray;
  margin: 8px auto;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Description = styled.div`
  width: 100%;
  align-self: flex-end;
`;

type PokemonProps = {
  pokemon: Object,
};

function PokemonCard({ pokemon }: PokemonProps): React.Node {
  return (
    <Card to={`/detail/${pokemon.name}`}>
      <ImageContainer>
        <img src={pokemon.image} width="100%" alt={pokemon.name} />
      </ImageContainer>
      <Description>
        <Name>{pokemon.name}</Name>
        <Classification>{pokemon.classification}</Classification>
        <p>{pokemon.types.join(", ")}</p>
      </Description>
    </Card>
  );
}

type PokemonCardProps = {
  pokemons: Array<any>,
  filter: Array<any>,
};

export default function PokemonCards({
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
