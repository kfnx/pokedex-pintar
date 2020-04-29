// @flow
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { YELLOW_WARUNG, DARK_SLATE_GRAY } from "../../constants/colors";
import POKEMON_TYPES from "../../constants/pokemonTypes";

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: ${(props) => (props.display === "true" ? "0px" : "-2500px")};
  left: 0px;
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: ${YELLOW_WARUNG};
  text-align: center;
  color: ${DARK_SLATE_GRAY};
  line-height: 2em;
  transition: all 0.4s ease-in-out;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 2em;
  cursor: pointer;
`;

const TypeListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0px;
`;

const Type = styled.li`
  width: 30%;
  font-size: 0.9em;
  &:nth-child(even) {
    margin-right: 20%;
  }
  &:nth-child(odd) {
    margin-left: 20%;
  }
  display: inline-block;
  transition: all 0.35 ease-in-out;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.check &&
    `
    &:after {
      content: " ✔️";
    }
  `};
  &:hover {
    opacity: 0.5;
  }
`;

const SuggestionSentence = styled.p`
  font-size: 0.8em;
  margin-bottom: 8px;
`;

const ActionButton = styled(Link)`
  margin-top: 12px;
  background-color: transparent;
  border-radius: 8px;
  padding: 6px 24px;
  text-decoration: none;
  color: ${DARK_SLATE_GRAY};
  border: 2px solid ${DARK_SLATE_GRAY};
  cursor: pointer;
  transition: all 0.35 ease-in-out;
  &:hover {
    background-color: ${DARK_SLATE_GRAY};
    color: ${YELLOW_WARUNG};
  }
`;

type Props = {
  display: boolean,
  onClose: Function,
};

export default function ({ display, onClose }: Props): React.Node {
  const [selectedFilters, selectFilter] = useState([]);

  const handleSetFilter = (type) => {
    if (selectedFilters.includes(type)) {
      selectFilter(selectedFilters.filter((item) => item !== type));
    } else {
      selectFilter([...selectedFilters, type]);
    }
  };

  const filterSelected = selectedFilters.length > 0;
  const filterUrl = filterSelected
    ? `/filter/${selectedFilters.join("&")}`
    : `/`;

  const handleClickFilter = () => {
    if (!filterSelected) {
      window.alert("please select pokemon types to filter");
    } else {
      onClose();
    }
  };

  const handleClickClear = () => {
    selectFilter([]);
  };

  return (
    <Container display={display.toString()}>
      <CloseButton onClick={onClose}>&#120;</CloseButton>
      <SuggestionSentence>Select pokémon types to filter</SuggestionSentence>
      <TypeListContainer>
        {POKEMON_TYPES.map((type) => (
          <Type
            key={type}
            onClick={() => handleSetFilter(type)}
            check={selectedFilters.includes(type)}
          >
            {type}
          </Type>
        ))}
      </TypeListContainer>
      <ActionButton to={filterUrl} onClick={handleClickFilter}>
        Filter
      </ActionButton>
      <ActionButton to="/" onClick={handleClickClear}>
        Clear
      </ActionButton>
    </Container>
  );
}
