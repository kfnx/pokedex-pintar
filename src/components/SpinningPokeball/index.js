// @flow
import React from "react";
import styled, { keyframes, css } from "styled-components";
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

const SpinningPokeball = styled.img`
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

export default function ({ fullscreen }: Props): React.Node {
  return (
    <Container fullscreen={fullscreen}>
      <SpinningPokeball src={Pokeball} />
    </Container>
  );
}
