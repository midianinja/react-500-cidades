import React, { useContext, useEffect } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import Store, { StoreProvider } from './store/Store';

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
