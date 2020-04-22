import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import './global.css';
import { StoreProvider } from './store/Store';

// const client = new ApolloClient({
//   uri: '',
// });

function App() {
  return (
    // <ApolloProvider client={client}>
      <BrowserRouter>
        <StoreProvider>
          <Routes />
        </StoreProvider>
      </BrowserRouter>
    // </ApolloProvider>

  );
}

export default App;
