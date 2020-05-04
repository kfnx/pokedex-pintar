// @flow
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { YELLOW_WARUNG } from "../../constants/colors";

const Container = styled.div`
  margin: 175px auto;
  text-align: center;
  line-height: 2.5em;
`;

const HomeLink = styled(Link)`
  color: ${YELLOW_WARUNG};
  font-size: 1.2em;
`;

export default function Error(): React.Node {
  return (
    <Container>
      <p>Oops, something went wrong!</p>
      <HomeLink to="/">Please Back to Home</HomeLink>
    </Container>
  );
}
