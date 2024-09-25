import './App.css';

import React, {lazy, Suspense, useEffect, useState} from 'react';
import {CookiesProvider, useCookies} from 'react-cookie';
import {AllContext} from './Value/AllContext';
import {Box, ChakraProvider, theme} from '@chakra-ui/react';
import Start from './pages/start/Start';

const Ingame = lazy(() => import('./pages/ingame/Game'));

export default function App() {
  const [game, setGame] = useState('start');
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [size, Setsize] = useState(1);
  const [playerName, setPlayerName] = useState("");
  const [playerID, setPlayerID] = useState(0);
  const [cookies] = useCookies(['user']);
  const [play, SetPlayed] = useState(false);

  const handleClick = gameState => {
    setGame(gameState);
  };

  useEffect(() => {
    if (cookies.Name !== null) {
      setPlayerName(cookies.Name);
    } else {
      setPlayerName("player");
    }
  }, [])

  return (
      <CookiesProvider>
        <ChakraProvider theme={theme}>
          <AllContext.Provider
              value={{
                highScore,
                SethighScore: setHighScore,
                size,
                Setsize,
                playername: playerName,
                Setplayername: setPlayerName,
                playerid: playerID,
                Setplayerid: setPlayerID,
                level,
                Setlevel: setLevel,
                play,
                SetPlayed
              }}>
            <Box className="App" h={'100vh'} pos='relative' overflow={'hidden'} scroll="no">
              {(() => {
                switch (game) {
                  case 'start':
                    return <Start handleClick={handleClick}/>;
                  case 'ingame':
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                          <Ingame handleClick={handleClick}/>
                        </Suspense>
                    );
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
