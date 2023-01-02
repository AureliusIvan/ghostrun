import React, { useState } from 'react';
import './App.css';
import { AllContext } from './Value/AllContext';
// chakra
import { ChakraProvider, theme } from '@chakra-ui/react';
// pages
import Start from './pages/start/Start';
import Ingame from './pages/ingame/Game';
import { Box } from '@chakra-ui/react';

function App() {
  const [game, setGame] = useState('ingame');
  const handleClick = gameState => {
    setGame(gameState);
  };

  // high-score
  const [highScore, SethighScore] = useState(0);


  return (
    <ChakraProvider theme={theme}>
      <AllContext.Provider
        value={{
          highScore,
          SethighScore
        }}>
        <Box className="App" h={'100vh'} pos='relative' overflow={'hidden'} scroll="no">
          {(() => {
            switch (game) {
              case 'start':
                return <Start handleClick={handleClick} />;
              case 'ingame':
                return <Ingame handleClick={handleClick} />;
              default:
                return null;
            }
          })()}
        </Box>
      </AllContext.Provider>
    </ChakraProvider>
  );
}

export default App;
