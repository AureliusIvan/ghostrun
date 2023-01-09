import { useState, useEffect, useRef, useContext } from "react";
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
    ModalHeader
} from '@chakra-ui/react';
import { useInterval } from "../utils/UseInterval";
import { AllContext } from "../../Value/AllContext";
import useSound from 'use-sound';
import jumpsound from '../../asset/sound/jump.mp3'
import crashsound from '../../asset/sound/crash.mp3'
// import poinsound from '../../asset/sound/poin.mp3'
import restartsound from '../../asset/sound/restart.mp3'
// asset
import { Cloud } from "./cloud";
// context
import supabase from "../../supabaseconfig/supabaseClient";
import { Customtext } from "../utils/Customtext";
import { useCookies } from 'react-cookie';
import Obstacle from "./object";
import { Mountain } from "../../bg/Mountain";
import React from "react";


function elementsColliding(el1, el2) {
    const a = el1.current.getBoundingClientRect();
    const b = el2.current.getBoundingClientRect();
    if ((
        ((b.right) > (a.right)) &&
        a.top < b.bottom &&
        (b.left) <= (a.right + 10) &&
        a.bottom > b.top
    )
    ) {
        return true;
    }
    return false;
}


function Ingame(props) {
    // score
    const [newscore, Setnewscore] = useState(false);
    // all sound
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
            if (counter % 1000 > 500) {
                SetDay(false);
                SetScene("rgb(21, 36, 48)");
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


    //return
    return (<Box
        w={'100%'}
        h='100%'
        transitionDuration="2s"
        background={Scene}
        onMouseDownCapture={OnMouseDown}
        onTouchStart={OnMouseDown}
        className='prevent-select'
    >
        <Center>
            <Cloud
                transform={["scale(0.1) translateY(1400px) translateX(-700px)", "scale(0.2) translateY(600px) translateX(-700px)"]}
            />
            <Cloud
                transform={["scale(0.1) translateY(1200px) translateX(-0px)", "scale(0.2) translateY(700px) translateX(-0px)"]}
            />
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
        <Center>
            {/* main content */}
            <Flex
                borderBottom={Day ? "2px solid black" : "2px solid white"}
                alignContent='baseline'
                alignItems={'end'}
                w='500px'
                h={'200px'}
                overflow="hidden"
                transform={['scale(0.7)', 'scale(1)', 'scale(1.5)']}
                pos="relative"
                width="500px"
                height="200px"

            >
                <Ghost refghost={character} jump={animate ? "animate head" : "notanimated head"} frown={nabrak} />
                <Obstacle refobstacle={obstacle} id="obstacle" />

            </Flex>
            {/* main content */}
        </Center>
        <br />
        <Customtext content={newscore ? "NEW HIGH SCORE!" : ""} />
        {tap === false && <Customtext content={"TAP or Click to Jump and avoid monster!"} />}
        <Mountain />
    </Box >);
}

export default Ingame;