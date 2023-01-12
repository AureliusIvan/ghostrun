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
import { Lolipop } from './pages/ingame/obstacledesign/Level1_candyland/lolipop';
import { Princess } from './pages/ingame/obstacledesign/Level1_candyland/princess';
import {
  Icecreamvelvet,
  IcecreamthreeInOne1,
  Icecreamchocolate,
  IcecreamthreeInOne2,
  IcecreamchocolateWithStuff1,
  Icecreamlemon,
  Icecreamwatermelon,
  IcecreamisThatPink,
  IcecreamPINK,
  IcecreamthreeInOne3,
  IcecreamchocolateWithStuff2,
  Icecreampoison
} from "./pages/ingame/obstacledesign/Level1_candyland/iceCreamrain";
import { PigMonster, FireNormal } from './pages/ingame/obstacledesign/Level1_candyland/pig';
import { MonsterRabbit } from './pages/ingame/obstacledesign/Level1_candyland/rabbit';

function App() {
  const [game, setGame] = useState('start');
  const handleClick = gameState => {
    setGame(gameState);
  };
  const [playost] = useSound(OST);

  // level
  const [level, Setlevel] = useState(1);
  // high-score
  const [highScore, SethighScore] = useState(0);
  const [size, Setsize] = useState(1);
  const [playername, Setplayername] = useState("");
  const [playerid, Setplayerid] = useState(0);
  // const [level, Setlevel] = useState(0);
  const [cookies, setCookie] = useCookies(['user']);
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
                  return <Ingame handleClick={handleClick} />;
                case 'leaderboard':
                  return <Leaderboard handleClick={handleClick} />
                  // return <Princess />
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
