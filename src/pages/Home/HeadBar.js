import React from "react";
import styled from "styled-components";
import { YELLOW_DARK_CONTRAST } from "../../constants/colors";

const ActiveFilters = styled.p`
  margin: 8px 5%;
  text-align: center;
  font-size: 0.8em;
  line-height: 1.5em;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 5%;
`;

const FilterButton = styled.button`
  border: 0px;
  background: transparent;
  padding: 0px;
  color: ${YELLOW_DARK_CONTRAST};
  font-size: 1.2em;
  cursor: pointer;
  font-weight:800;
`;

type Props = {
  filters: Array<string>,
  openFilter: Function,
};

export default function HeadBar({
  filters,
  openFilter,
}: Props): React.Node {
  return (
    <React.Fragment>
      <Header>
        <h3>Pokédex Pintar</h3>
        <FilterButton onClick={openFilter}>FILTER</FilterButton>
      </Header>
      {filters.length > 0 && (
        <ActiveFilters>filter : {filters.join(", ")}</ActiveFilters>
      )}
    </React.Fragment>
  );
}
