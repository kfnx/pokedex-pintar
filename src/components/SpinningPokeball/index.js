// @flow
import React from "react";
import styled, { keyframes } from "styled-components";
import Pokeball from "../../pokeball-icon.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 64px;
  text-align: center;
  margin: 16px auto;
`;

const SpinningPokeball = styled.img`
  height: 64px;
  width: 64px;
  margin: auto;
  transition: all 0.35s ease-in-out;
  animation: ${rotate} 1s linear infinite;
  opacity: 0.6;
`;

export default function (): React.Node {
  return (
    <Container>
      <SpinningPokeball src={Pokeball} />
    </Container>
  );
}
