// @flow
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { YELLOW_WARUNG, DARK_SLATE_GRAY } from "../../constants/colors";
import POKEMON_TYPES from "../../constants/pokemonTypes";

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: ${(props) => (props.show ? "0px" : "-2500px")};
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
  border-radius: 8px;
  padding: 6px 24px;
  text-decoration: none;
  color: ${DARK_SLATE_GRAY};
  border: 2px solid ${DARK_SLATE_GRAY};
  cursor: pointer;
  &:hover {
    background-color: ${DARK_SLATE_GRAY};
    color: ${YELLOW_WARUNG};
  }
`;

type Props = {
  display: boolean,
  onClose: Function,
  filters: Array<string>
};

export default function ({ display, onClose, filters }: Props): React.Node {
  const [selectedFilters, selectFilter] = useState(filters ? filters : []);
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

  const Motion = ({ children }) => (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.9 }}
      style={{ margin: "8px" }}
    >
      {children}
    </motion.div>
  );

  return (
    <Container show={display}>
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
      <Motion>
        <ActionButton to={filterUrl} onClick={handleClickFilter}>
          Filter
        </ActionButton>
      </Motion>
      <Motion>
        <ActionButton to="/" onClick={handleClickClear}>
          Clear
        </ActionButton>
      </Motion>
    </Container>
  );
}
