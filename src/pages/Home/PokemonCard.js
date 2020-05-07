import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { YELLOW_WARUNG } from "../../constants/colors.js";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  text-align: center;
  width: 200px;
  padding: 16px;
  margin: 16px 16px 16px 16px;
  border: 2px solid gainsboro;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: rotate(1.5deg);
    border: 2px solid ${YELLOW_WARUNG};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: 180px;
`;

const Image = styled.img`
  max-height: 180px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin: 16px auto 8px auto;
`;

const Classification = styled.p`
  color: slategray;
  margin: 0px auto;
`;

const Types = styled.p`
  margin: 8px auto 0px auto;
`;

type PokemonProps = {
  pokemon: Object,
};

export default function PokemonCard({ pokemon }: PokemonProps): React.Node {
  return (
    <motion.div
      initial={{ rotate: -180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.9 }}
    >
      <Card to={`/detail/${pokemon.name}`}>
        <ImageContainer>
          <Image src={pokemon.image} alt={pokemon.name} width="100%" />
        </ImageContainer>
        <Name>{pokemon.name}</Name>
        <Classification>{pokemon.classification}</Classification>
        <Types>{pokemon.types.join(", ")}</Types>
      </Card>
    </motion.div>
  );
}
