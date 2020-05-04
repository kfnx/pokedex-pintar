import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PokemonTypesFilter from "./index";

afterEach(cleanup);

describe("PokemonTypesFilter", () => {
  test("PokemonTypesFilter render", () => {
    const { getByText } = render(
      <BrowserRouter>
        <PokemonTypesFilter display onClose={() => null} />
      </BrowserRouter>
    );
    expect(getByText("Select pokémon types to filter")).toBeInTheDocument();
  });
});
