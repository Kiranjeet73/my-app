import React from 'react';
import createRoot from 'react-dom';

import App from './App';
import { DarkMOdeContextProvider } from './context/darkModeContext';


createRoot.render(
  <React.StrictMode>
    <DarkMOdeContextProvider>
    <App />
    </DarkMOdeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


