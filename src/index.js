import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { GameProvider } from './Context/GameContext';
import {ThemeProvider} from './Context/ThemeContext';
import { AudioProvider } from './Context/AudioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AudioProvider>
      <ThemeProvider>
      <GameProvider>
      <App/>
      </GameProvider>
      </ThemeProvider>
      </AudioProvider>
    </ChakraProvider>
  </React.StrictMode>
);
