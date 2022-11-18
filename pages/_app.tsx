import '../styles/globals.css';
import React, { Component, ReactElement, ReactNode } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URI,
  cache: new InMemoryCache(),

});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
