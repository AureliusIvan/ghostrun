import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import { AllContext } from './Value/AllContext';
// chakra
import { ChakraProvider, Circle, theme } from '@chakra-ui/react';
// pages
import Start from './pages/start/Start';
import Ingame from './pages/ingame/Game';
import { Box } from '@chakra-ui/react';
import Leaderboard from './pages/form/Leaderboard';
// cookies
import { CookiesProvider } from "react-cookie";
// testing
import { Testcircle } from './testcircle/circle';

function App() {
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
  };
  // high-score
  const [highScore, SethighScore] = useState(0);
  const [size, Setsize] = useState(1);
  const [playername, Setplayername] = useState("");
  const [playerid, Setplayerid] = useState(0);
  const [level, Setlevel] = useState(0);
  const [cookies, setCookie] = useCookies(['user']);


  useEffect(() => {
    if (cookies.Name !== null) {
      Setplayername(cookies.Name);
    } else {
      Setplayername("player");
    }
  })

  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <AllContext.Provider
          value={{
            highScore,
            SethighScore,
            size,
            Setsize,
            playername,
            Setplayername,
            playerid,
            Setplayerid,
            level,
            Setlevel
          }}>
          <Box className="App" h={'100vh'} pos='relative' overflow={'hidden'} scroll="no">
            {(() => {
              switch (game) {
                case 'start':
                  return <Start handleClick={handleClick} />;
                case 'ingame':
                  return <Ingame handleClick={handleClick} />;
                case 'leaderboard':
                  return <Testcircle/>;
                default:
                  return null;
              }
            })()}
          </Box>
        </AllContext.Provider>
      </ChakraProvider>
    </CookiesProvider>
  );
}


export default App;
