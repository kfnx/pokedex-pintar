import { gql } from "apollo-boost";

export const PokemonDetail = gql`
  query pokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
        }
        special {
          name
          type
        }
      }
      weaknesses
      evolutions {
        id
        name
        image
      }
    }
  }
`;
