// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { AllContext } from './Value/AllContext';
// chakra
import { ChakraProvider, theme } from '@chakra-ui/react';
// import AnimatedCursor from 'react-animated-cursor';
// pages
import Start from './pages/start/Start';
import Ingame from './pages/ingame/Game';

function App() {
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
  };
  // value
  const [highScore, SethighScore] = useState(0);


  return (
    <ChakraProvider theme={theme}>
      <AllContext.Provider
        value={{
          highScore,
          SethighScore
        }}>
        {/* <AnimatedCursor
          innerSize={12}
          outerSize={8}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={7}
          trailingSpeed="12"
        /> */}
        <div className="App">
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
        </div>
      </AllContext.Provider>
    </ChakraProvider>
  );
}

export default App;
