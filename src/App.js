import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { StoreProvider } from './store/Store';

function App() {
  return (
      <BrowserRouter>
        <StoreProvider>
          <Routes />
        </StoreProvider>
      </BrowserRouter>
  );
}

export default App;
