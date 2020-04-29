import { gql } from "apollo-boost";

export const PokemonList = gql`
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      number
      classification
    }
  }
`;
