// @flow
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { YELLOW_WARUNG } from "../../constants/colors";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const EvolutionItem = styled(Link)`
  text-decoration: none;
  color: ${YELLOW_WARUNG};
  text-align: center;
`;

const EvolutionCard = styled.div`
  border: 2px solid gainsboro;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  @media (max-width: 768px) {
    margin: 16px 22px;
  }
`;

const EvoPokemonImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 128px;
  height: 128px;
  margin: 8px 16px;
  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
    margin: 8px;
  }
`;

const Title = styled.p`
  font-size: 0.8em;
  color: slategray;
  margin: 12px auto 8px auto;
  text-align: left;
`;

export default function Evolution({ evolutions }): React.Node {
  return (
    <EvolutionCard>
      <Title>Evolution</Title>
      <FlexContainer>
        {evolutions.map((i) => (
          <EvolutionItem to={`/detail/${i.name}`} key={i.id}>
            <EvoPokemonImage>
              <img src={i.image} width="100%" alt={i.name} />
            </EvoPokemonImage>
            <h4>{i.name}</h4>
          </EvolutionItem>
        ))}
      </FlexContainer>
    </EvolutionCard>
  );
}
