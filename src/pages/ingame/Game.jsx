import { useState, useEffect, useRef, useContext } from "react";
import "./Game.css";
import Ghost from "../../character/Ghost";
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
    Button
} from '@chakra-ui/react';
import { AllContext } from "../../Value/AllContext";
import useSound from 'use-sound';
// import jumpsound from '../../asset/sound/jump.mp3'
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


function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

function Ingame(props) {
    const [cookies, setCookie] = useCookies(['user']);
    const { highScore, SethighScore } = useContext(AllContext);
    const { Setlevellenght } = useContext(AllContext);

    const fetchnama = async () => {
        const { } = await supabase
            .from('Leaderboard')
            .update({ name: cookies.Name, score: highScore+1 })
            .eq('id', cookies.id)
    }

    // score
    const [newscore, Setnewscore] = useState(false);
    // all sound
    // const [play] = useSound(jumpsound);
    const [playcrashsound] = useSound(crashsound);
    // const [playpoinsound] = useSound(poinsound);
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
    // const [mouseDown, setMouseDown] = useState(false);
    const [animate, Setanimate] = useState(false);

    function elementsColliding(el1, el2) {
        const a = el1.getBoundingClientRect("");
        const b = el2.getBoundingClientRect("");
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


    // character
    let character = document.getElementById("character");
    let block = document.getElementById("block");
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
            if (counter % 1000 >= 500) {
                SetDay(false);
                SetScene("rgb(21, 36, 48)");
            }
            else {
                SetDay(true);
                SetScene("rgb(158, 211, 255)");
            }

        }
        if (
            elementsColliding(character, block) === true
        ) {
            setNabrak(true);
            if (suaranabrak === (0)) {
                playcrashsound();
                Setsuaranabrak(1);
            }
            onOpen();
            block.style.animationPlayState = 'paused';
            return;
        }
    }, 100);

    function OnMouseDown() {
        if(nabrak !== true){
            Setanimate(true);
            setTimeout(() => {
                Setanimate(false);
            }, 400);
        }
    };


    //return
    return (<Box
        w={'100%'}
        h='100%'
        transition={'0.5s'}
        bgColor={Scene}
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
            <ModalContent bg={'none'} width="300px" padding={'10px'}>
                <Text color="white">
                    Nabrak Cuy!
                </Text>
                <br />
                <ModalBody>
                    <Center className="prevent-select">
                        <Button
                            onClick={() => {
                                props.handleClick('start')
                                playrestartsound({ id: 'sound' });
                                Setsuaranabrak(0);
                                Setlevellenght(0);
                                setCookie('highScore', highScore, { path: '/' });
                                fetchnama();
                            }}
                            colorScheme='blue' mr={3}
                            className="prevent-select"
                        >
                            Restart
                        </Button>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
        <br />
        <Center>
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
                <Ghost jump={animate ? "animate head" : "notanimated head"} frown={nabrak} />
                <Obstacle id="block" />
            </Flex>
        </Center>
        <br />
        <Customtext content={newscore ? "NEW HIGH SCORE!" : ""} />
    </Box >);
}

export default Ingame;