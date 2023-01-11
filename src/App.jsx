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
import useSound from 'use-sound';
// cookies
import { CookiesProvider } from "react-cookie";
import OST from "./asset/sound/pvz.mp3"


function App() {
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
  };
  const [playost] = useSound(OST);

  // high-score
  const [highScore, SethighScore] = useState(0);
  const [size, Setsize] = useState(1);
  const [playername, Setplayername] = useState("");
  const [playerid, Setplayerid] = useState(0);
  const [level, Setlevel] = useState(0);
  const [cookies, setCookie] = useCookies(['user']);
  const [play, SetPlayed] = useState(false);

  const handleOST = oststate =>{
    // playost(oststate);
  };

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
                  return <Start handleClick={handleClick} handleOST={handleOST} />;
                case 'ingame':
                  return <Ingame handleClick={handleClick} />;
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


export default App;
