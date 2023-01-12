import { useState, useEffect, useRef, useContext } from "react";
import { KeyboardEvent } from "react";
import "./Game.css";
import { Ghost } from "../../character/Ghost";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Flex,
    Box,
    Center,
    Text,
    Button,
    ModalHeader,
    Image,
    Kbd
} from '@chakra-ui/react';
import { LevelTitle } from "../../utils/LevelTitle";
import { elementsColliding } from "../../utils/Colide";
import { useInterval } from "../../utils/UseInterval";
import { AllContext } from "../../Value/AllContext";
import supabase from "../../supabaseconfig/supabaseClient";
import { Customtext } from "../../utils/Customtext";
import { useCookies } from 'react-cookie';
import Obstacle from "./object";
import React from "react";
import useSound from 'use-sound';
// asset
import jumpsound from '../../asset/sound/jump.mp3'
import crashsound from '../../asset/sound/crash.mp3'
import restartsound from '../../asset/sound/restart.mp3'
import { Cloud } from "./cloud";
import OST from "./../../asset/sound/pvz.mp3"
// background 1
import candybg from "./../../asset/image/bg.png"
import candybg2 from "./../../asset/image/bg2.png"
import candybg3 from "./../../asset/image/bg3.png"
// background 2
import foodbg from "./../../asset/image/bg4.png"
import foodbg2 from "./../../asset/image/bg5.png"
import foodbg3 from "./../../asset/image/bg6.png"
// background 3
import swampbg from "./../../asset/image/bg7.png"
import swampbg2 from "./../../asset/image/bg8.png"
import swampbg3 from "./../../asset/image/bg9.png"

function Ingame(props) {
    // level design
    const { level, Setlevel } = useContext(AllContext);
    // background
    const [bg, setbg] = useState({
        bg1: candybg,
        bg2: candybg2,
        bg3: candybg3,
        bgcolor: "#94c5f8"
    });
    // score
    const [newscore, Setnewscore] = useState(false);
    // all sound
    const [isPlaying, setIsPlaying] = React.useState(false);

    const [playBoop, { pause }] = useSound(OST, {
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
    });

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            playBoop();
        }
        setIsPlaying(!isPlaying);
    }
    const [playost, stopOST] = useSound(OST);
    const [playjumpsound] = useSound(jumpsound);
    const [playcrashsound] = useSound(crashsound);
    const [playrestartsound] = useSound(restartsound, {
        sprite: {
            sound: [300, 3000]
        },
    });
    // modal state
    const { isOpen, onOpen, onClose } = useDisclosure()
    //counter
    const [counter, setCounter] = useState(0);
    const [Day, SetDay] = useState(true);
    const [Scene, SetScene] = useState("rgb(158, 211, 255)");
    //cek nabrak 
    const [nabrak, setNabrak] = useState(false);
    const [suaranabrak, Setsuaranabrak] = useState(0);
    const [animate, Setanimate] = useState(false);
    // const cookies
    const [cookies, setCookie] = useCookies(['user']);
    const { highScore, SethighScore } = useContext(AllContext);
    // character
    const character = useRef(null);
    const obstacle = useRef(null);

    // fetchnama async
    const fetchnama = async () => {
        const { } = await supabase
            .from('Leaderboard')
            .update({ name: cookies.Name, score: highScore + 1 })
            .eq('id', cookies.id)
    }


    // intervall
    useInterval(() => {
        if (nabrak === false) {
            setCounter(counter + 1);
            if (counter > highScore) {
                setCookie('highScore', counter, { path: '/' });
                SethighScore(counter);
                Setnewscore(true);
            }
            // 
            if (counter % 1000 > 100 && counter % 1000 <= 200) {
                // junkfood
                // SetDay(false);
                // SetScene("rgb(21, 36, 48)");
                setbg({
                    bg1: foodbg,
                    bg2: foodbg2,
                    bg3: foodbg3,
                    bgcolor: "#ffb3e8"
                })
                Setlevel(2);
            } else if (counter % 1000 > 200 && counter % 1000 <= 300) {
                // swamp
                // SetDay(false);
                // SetScene("rgb(21, 36, 48)");
                setbg({
                    bg1: swampbg,
                    bg2: swampbg2,
                    bg3: swampbg3,
                    bgcolor: "#1d8239"
                })
                Setlevel(2);
            }
            else {
                SetDay(true);
                SetScene("#94c5f8")
            }

        }
        if (elementsColliding(character, obstacle) === true) {
            setNabrak(true);
            if (suaranabrak === (0)) {
                playcrashsound();
                Setsuaranabrak(1);
            }
            onOpen();
            obstacle.current.style.animationPlayState = 'paused';
            pause();
            return;
        }
    }, 100);

    const [mouseup, setmouseup] = useState(false);
    const [tap, setTap] = useState(false);
    function OnMouseDown() {
        setTap(true);
        if (nabrak !== true) {
            if (mouseup === false) {
                Setanimate(true);
                setmouseup(true);
                playjumpsound();
            }
            setTimeout(() => {
                Setanimate(false);
            }, 400)
            setTimeout(function () { setmouseup(false) }, 800);
        }
    };

    function onKeyDownhandle(e) {
        console.log(e);
    }

    //return
    return (<Box
        w={'100%'}
        h='100%'
        transitionDuration="2s"
        background={bg.bgcolor}
        // backgroundPosition=""
        onMouseDownCapture={() => {
            OnMouseDown();
        }}
        onKeyDown={onKeyDownhandle }
        onTouchStart={OnMouseDown}
        className='prevent-select'
    >
        <Center>
            <Cloud />
        </Center>
        <br />
        <Text
            color={Day ? "black" : "white"}
            className="prevent-select"
        >
            SCORE : {counter}
        </Text>
        {/* modal */}
        <Modal closeOnOverlayClick={false} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader bgColor={"gray.700"}>
                    <Customtext content="Nabrak Cuy!" />
                </ModalHeader>
                <ModalBody bgColor={"gray.500"}>
                    <Customtext content={"Your Score : " + counter} />
                    <br />
                    <br />
                    <Center className="prevent-select">
                        <Button
                            onClick={() => {
                                props.handleClick('start')
                                playrestartsound({ id: 'sound' });
                                Setsuaranabrak(0);
                                setCookie('highScore', highScore, { path: '/' });
                                fetchnama();
                            }}
                            border="5px solid white"
                            colorScheme='blue' mr={3}
                            className="prevent-select"
                        >
                            <Customtext content="Restart!" />
                        </Button>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
        <br />
        <Center
        >
            {/* main content */}
            <Flex
                borderBottom={Day ? "1px solid black" : "2px solid white"}
                alignContent='baseline'
                alignItems={'end'}
                overflow="hidden"
                transform={['scale(1)', 'scale(1)', 'scale(3.7)']}
                pos="relative"
                width="100vh"
                maxW={"400px"}
                height="250px"
                transition={"3s"}
                transitionDuration={"3s"}
            >
                <Image
                    onAnimationStart={togglePlay}
                    src={bg.bg1}
                    position="absolute"
                    objectFit={"cover"}
                    backgroundSize="100%"
                    bgPosition={"bottom"}
                    zIndex={-1}
                    className="gameplayBox prevent-drag"

                />
                <Image src={bg.bg2}
                    position="absolute"
                    objectFit={"cover"}
                    backgroundSize="100%"
                    bgPosition={"bottom"}
                    zIndex={-1}
                    className="gameplayBox2 prevent-drag"

                />
                <Image src={bg.bg3}
                    position="absolute"
                    objectFit={"cover"}
                    backgroundSize="100%"
                    bgPosition={"bottom"}
                    zIndex={-1}
                    className="gameplayBox3 prevent-drag"
                />

                <Ghost refghost={character} jump={animate ? "animate head" : "notanimated head"} frown={nabrak} />
                <Obstacle refobstacle={obstacle} id="obstacle" />

            </Flex>
            {/* main content */}
        </Center>
        <br />
        <Customtext content={newscore ? "NEW HIGH SCORE!" : ""} />
        {tap === false && <><Customtext content={["TAP or Click to Jump or Click"]} /><Kbd>enter</Kbd></>}
        <LevelTitle content={level} />
        {/* <Mountain /> */}
    </Box >);
}

export default Ingame;