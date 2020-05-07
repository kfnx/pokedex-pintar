// @flow
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Evolutions from "./Evolutions";

const Container = styled(motion.div)`
  width: 80%;
  margin: 16px auto;
  overflow-x: hidden;
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
  min-width: 40%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Statistic = styled.div`
  border: 2px solid gainsboro;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  min-width: 40%;
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

export default function PokemonDetail({ data }): React.Node {
  const {
    name,
    classification,
    image,
    evolutions,
    weight,
    height,
    types,
    attacks,
    resistant,
    weaknesses,
  } = data;

  return (
    <Container
      initial={{ x: -2000, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
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
      </FlexContent>
      {Array.isArray(evolutions) && <Evolutions evolutions={evolutions} />}
    </Container>
  );
}
