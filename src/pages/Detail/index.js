// @flow
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { PokemonDetail } from "../../query/PokemonDetail";
import SpinningPokeball from "../../components/SpinningPokeball";

const Container = styled.div`
  width: 80%;
  margin: 16px auto;
`;

const Name = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  margin: 16px auto 12px auto;
  text-align: center;
`;

const Classification = styled.p`
  color: slategray;
  margin: 8px auto;
  text-align: center;
`;

const FlexContent = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PokemonImage = styled.div`
  display: flex;
  border: 2px solid gainsboro;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 16px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Statistic = styled.div`
  border: 2px solid gainsboro;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.p`
  font-size: 0.8em;
  color: slategray;
  margin: 12px auto 8px auto;
  text-align: left;
`;

const Text = styled.p`
  line-height: 1.4em;
`;

export default function Detail(): React.Node {
  const { name } = useParams();

  React.useEffect(() => {
    document.title = `${name} | Pokédex`;
  }, [name]);

  const { loading, error, data } = useQuery(PokemonDetail, {
    variables: { name },
  });

  if (data && data.pokemon) {
    const {
      name,
      classification,
      image,
      // evolutions,
      weight,
      height,
      types,
      attacks,
      resistant,
      weaknesses,
    } = data.pokemon;

    return (
      <Container>
        <Name>{name}</Name>
        <Classification>{classification}</Classification>
        <FlexContent>
          <PokemonImage>
            <img src={image} width="100%" alt={name} />
          </PokemonImage>
          <Statistic>
            <Title>Weight</Title>
            <Text>{`${weight.minimum} - ${weight.maximum}`}</Text>
            <Title>Height</Title>
            <Text>{`${height.minimum} - ${height.maximum}`}</Text>
            <Title>Types</Title>
            <Text>{types.join(", ")}</Text>
            <Title>Fast attacks</Title>
            <Text>
              {attacks &&
                attacks.fast.map((i) => `${i.name} (${i.type})`).join(", ")}
            </Text>
            <Title>Special attacks</Title>
            <Text>
              {attacks &&
                attacks.special.map((i) => `${i.name} (${i.type})`).join(", ")}
            </Text>
            <Title>Resistant</Title>
            <Text>{resistant.join(", ")}</Text>
            <Title>Weaknesses</Title>
            <Text>{weaknesses.join(", ")}</Text>
          </Statistic>
          {/* {Array.isArray(evolutions) && <Evolution evolutions={evolutions} />} */}
        </FlexContent>
      </Container>
    );
  } else {
    return <SpinningPokeball />;
  }
}
