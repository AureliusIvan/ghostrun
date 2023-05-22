// all import start here
import { useState, useEffect, useRef, useContext, Fragment } from "react";
import "./Game.scss";
import { Ghost } from "../../Character/Ghost";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Flex,
    Center,
    Text,
    Button,
    ModalHeader,
    Image,
} from '@chakra-ui/react';
import { LevelTitle } from "../../utils/LevelTitle";
import { elementsColliding } from "../../utils/Colide";
import { useInterval } from "../../utils/UseInterval";
import { AllContext } from "../../Value/AllContext";
import { Customtext } from "../../utils/Customtext";
import { useCookies } from 'react-cookie';
import Obstacle from "./obstacledesign/object";
import React from "react";
import useSound from 'use-sound';
import { useSelector, useDispatch } from "react-redux";
// asset
import jumpsound from '../../asset/sound/jump.mp3'
import crashsound from '../../asset/sound/crash.mp3'
import restartsound from '../../asset/sound/restart.mp3'
import { Cloud } from "./cloud";
import OST from "./../../asset/sound/pvz.mp3"
// background 1
import { resetBg, selectBackground } from "../../Redux/Feature/background/backgroundSlice";
import { changeBg } from "../../Redux/Feature/background/backgroundSlice";
// loading
import { loaded } from "../../Redux/Feature/gameState/gameStateSlice";
import { selectGameState } from "../../Redux/Feature/gameState/gameStateSlice";
// 
// 
// 
// main func start here

function ModalPop(props) {
    return (
        <Modal closeOnOverlayClick={false} isOpen={props.isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader bgColor={"gray.700"}>
                    <Customtext>
                        Nabrak Cuy!
                    </Customtext>
                </ModalHeader>
                <ModalBody>
                    <Customtext content={"Your Score : " + props.counter} />
                    <br />
                    <Center className="prevent-select">
                        <Button
                            onClick={props.onClick}
                            border="5px solid white"
                            colorScheme='blue'
                            mr={3}
                            className="prevent-select"
                        >
                            <Customtext>
                                Restart!
                            </Customtext>
                        </Button>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}


export default function Game(props) {
    const loadingbg = useSelector(selectGameState).isLoaded;
    function loadingHandler() {
        if (loadingbg.bg1 === true && loadingbg.bg2 === true && loadingbg.bg3 === true) {
        }
    };
    // 
    const { level, Setlevel } = useContext(AllContext);
    // background
    const dispatch = useDispatch();
    const background = useSelector(selectBackground);
    // score
    const [newscore, Setnewscore] = useState(false);
    // all sound
    const [isPlaying, setIsPlaying] = useState(false);

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
                dispatch(changeBg('food'));
                Setlevel(2);
            } else if (counter % 1000 > 200 && counter % 1000 <= 300) {
                // swamp
                dispatch(changeBg('swamp'));
                Setlevel(3);
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
                dispatch(resetBg());
            }
            onOpen();
            obstacle.current.style.animationPlayState = 'paused';
            pause();
            return;
        }
    }, 100);

    // Jump function
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

    const Restart = () => {
        props.handleClick('start')
        playrestartsound({ id: 'sound' });
        Setsuaranabrak(0);
        setCookie('highScore', highScore, { path: '/' });
    }

    //return
    return (<div
        style={{
            background: background.bgColor,
        }}
        onMouseDown={OnMouseDown}
        onTouchStartCapture={OnMouseDown}
        className='prevent-select Game'>
        <Center>
            <Cloud />
        </Center>
        <br />
        <Text
            color={Day ? "black" : "white"}
            className="prevent-select"
            background={Day ? "white" : "black"}
            position="absolute"
            top="0"
            width={"100%"}
        >
            SCORE : {counter}
        </Text>
        {/* modal */}
        <ModalPop onClick={Restart} isOpen={isOpen} counter={counter} />
        <br />
        <Center>
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
                    src={background.bg1}
                    position="absolute"
                    objectFit={"cover"}
                    backgroundSize="100%"
                    bgPosition={"bottom"}
                    zIndex={-1}
                    className="gameplayBox prevent-drag"
                    onLoad={() => {
                        dispatch(loaded());
                        loadingHandler();
                    }}
                />
                <Image src={background.bg2}
                    position="absolute"
                    objectFit={"cover"}
                    backgroundSize="100%"
                    bgPosition={"bottom"}
                    zIndex={-1}
                    className="gameplayBox2 prevent-drag"
                    onLoad={() => {
                        dispatch(loaded());
                        loadingHandler();

                    }}
                />
                <Image src={background.bg3}
                    position="absolute"
                    objectFit={"cover"}
                    backgroundSize="100%"
                    bgPosition={"bottom"}
                    zIndex={-1}
                    className="gameplayBox3 prevent-drag"
                    onLoad={() => {
                        dispatch(loaded());
                        loadingHandler();
                    }}
                />
                {loadingbg.bg1 === true && loadingbg.bg2 === true && loadingbg.bg3 === true ? (
                    <>
                        <Ghost refghost={character} jump={animate ? "animate head" : "notanimated head"} frown={nabrak} />
                        <Obstacle refobstacle={obstacle} id="obstacle" />

                    </>
                ) :
                    "Loading..."}

            </Flex>
            {/* main content */}
        </Center>
        <LevelTitle content={level} />
    </div>);
}