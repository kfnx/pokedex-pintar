// @flow
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh",
});

function App(): React.Node {
  return (
    <ApolloProvider client={client}>
      <div>App</div>
    </ApolloProvider>
  );
}

export default App;
