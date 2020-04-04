import React from 'react';
import Routes from './routes';
import { BrowserRouter} from 'react-router-dom';
import './global.css';

function App() {
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
