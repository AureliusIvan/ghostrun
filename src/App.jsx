import React, { useState } from 'react';
import './App.css';
import { AllContext } from './Value/AllContext';
// chakra
import { ChakraProvider, theme } from '@chakra-ui/react';
// pages
import Start from './pages/start/Start';
import Ingame from './pages/ingame/Game';
import { Box } from '@chakra-ui/react';
import AjaxGetExample from './pages/form/Ajaxget';
import { Testcircle } from './testcircle/circle';


function App() {
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
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
              case 'form':
                // return <Formdata handleClick={handleClick} />;
                return <Testcircle/>
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
