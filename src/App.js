// @flow
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Router from "./route";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
});

function App(): React.Node {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
