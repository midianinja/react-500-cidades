import React from 'react';
import Routes from './routes';
import { BrowserRouter} from 'react-router-dom';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import './global.css';

// const client = new ApolloClient({
//   uri:'',
// });

function App() {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  );
}

export default App;
