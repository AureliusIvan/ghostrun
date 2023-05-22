import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import { AllContext } from './Value/AllContext';
// chakra
import { ChakraProvider, theme } from '@chakra-ui/react';
// pages
import { Box } from '@chakra-ui/react';
import Leaderboard from './pages/form/Leaderboard';
// cookies
import { CookiesProvider } from "react-cookie";
import Start from './pages/start/Start';
const Ingame = lazy(() => import('./pages/ingame/Game'));

export default function App() {
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
  };

  // level
  const [level, Setlevel] = useState(1);
  // high-score
  const [highScore, SethighScore] = useState(0);
  const [size, Setsize] = useState(1);
  const [playername, Setplayername] = useState("");
  const [playerid, Setplayerid] = useState(0);
  const [cookies] = useCookies(['user']);
  const [play, SetPlayed] = useState(false);


  useEffect(() => {
    if (cookies.Name !== null) {
      Setplayername(cookies.Name);
    } else {
      Setplayername("player");
    }
  }, [])

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
            Setlevel,
            play,
            SetPlayed
          }}>
          <Box className="App" h={'100vh'} pos='relative' overflow={'hidden'} scroll="no">
            {(() => {
              switch (game) {
                case 'start':
                  return <Start handleClick={handleClick} />;
                case 'ingame':
                  return (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Ingame handleClick={handleClick} />
                    </Suspense>
                  );
                case 'leaderboard':
                  return <Leaderboard handleClick={handleClick} />
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
