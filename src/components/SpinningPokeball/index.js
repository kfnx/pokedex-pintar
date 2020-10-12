// @flow
import React from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import Pokeball from "../../pokeball-icon.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  height: 96px;
  text-align: center;
  ${(props) =>
    props.fullscreen
      ? css`
          margin: 250px auto 16px auto;
        `
      : css`
          margin: 16px auto;
        `}
`;

const AnimatedPokeball = styled.img`
  height: 96px;
  width: 96px;
  margin: auto;
  transition: all 0.35s ease-in-out;
  animation: ${rotate} 1s linear infinite;
  opacity: 0.6;
`;

type Props = {
  fullscreen: boolean,
};

export default function SpinningPokeball({ fullscreen }: Props): React.Node {
  return (
    <Container
      fullscreen={fullscreen}
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <AnimatedPokeball src={Pokeball} alt={"Animated Pokeball"} />
    </Container>
  );
}
