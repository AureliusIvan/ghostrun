import { Flex, Box, Center, Text, Button, Image } from "@chakra-ui/react";
import { useState, useEffect, useRef, useContext } from "react";
import "./Game.css"
import Ghost from "../../character/Ghost";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure
} from '@chakra-ui/react'
import { AllContext } from "../../Value/AllContext";
import useSound from 'use-sound';
// sound
// import jumpsound from '../../asset/sound/jump.mp3'
import crashsound from '../../asset/sound/crash.mp3'
// import poinsound from '../../asset/sound/poin.mp3'
import restartsound from '../../asset/sound/restart.mp3'
// import { Cloud } from "./cloud";
import woodbox from "../../asset/image/box.jpg"

function Obstacle() {
    return (
        <Box
            id="block"
            width="20px"
            height="20px"
            objectFit='cover'
        >
            <Image rel="preload" src={woodbox} />
        </Box>
    );
};

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
    // score
    const { highScore, SethighScore } = useContext(AllContext);
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

    const elementsColliding = function (el1, el2) {
        const a = el1.getBoundingClientRect()
        const b = el2.getBoundingClientRect()
        if (
            (((b.left) <= (a.right + 10)) && ((b.right) > (a.right)) && ((a.top) > (b.top - a.height)))) {
            return true
        }
        return false
    }
    // 

    let character = document.getElementById("character");
    let block = document.getElementById("block");
    useInterval(() => {
        if (nabrak === false) {
            setCounter(counter + 1);
            if (counter > highScore) {
                SethighScore(counter);
                Setnewscore(true);
            }
            // 
            if (counter >= 100 && counter < 200) {
                SetDay(true);
                SetScene("rgb(231, 237, 138)");
            }
            // sore
            else if (counter >= 200 && counter < 300) {
                SetScene("rgb(255, 131, 59)");
            }
            // malam
            else if (counter >= 300 && counter < 400) {
                SetDay(false);
                SetScene("rgb(21, 36, 48)");
            }
            // pagi 
            else {
                SetDay(true);
                SetScene("rgb(158, 211, 255)");
            }

        }
        var colide = elementsColliding(character, block);
        if (colide === true) {
            setNabrak(true);
            if (suaranabrak === (0)) {
                playcrashsound();
                Setsuaranabrak(1);
            }
            onOpen();
            character.style.animationPlayState = 'paused';
            block.style.animationPlayState = 'paused';
            return;
        }
    }, 100);


    // const [mouseDown, setMouseDown] = useState(false);
    const [animate, Setanimate] = useState(false);
    function OnMouseDown() {
        // setMouseDown(true);
        Setanimate(true);
        setTimeout(() => {
            Setanimate(false);

        }, 400);
    };

    // block run
    // const [blockrun, Setblockrun] = useState(false);

    return (<Box
        w={'100%'}
        h='100%'
        transition={'0.5s'}
        bgColor={Scene}
        onMouseDownCapture={OnMouseDown}
        className='prevent-select'
    >
        <br />
        <Text
            color={Day ? "black" : "white"}
            fontStyle={'bold'}
            className="prevent-select"
        >
            SCORE : {counter}
        </Text>
        {/* modal */}
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={'none'}>
                <Text color="white">
                    Nabrak Cok!
                </Text>
                <br />
                <ModalBody>
                    <Center className="prevent-select">
                        <Button
                            onClick={() => {
                                props.handleClick('start')
                                playrestartsound({ id: 'sound' });
                                Setsuaranabrak(0);
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
            // border="5px solid black"
            >
                <Box
                    pos={'absolute'}
                    left='50%'
                    top={'30%'}
                >
                    {/* <Cloud /> */}
                </Box>
                <Box
                    pos={'absolute'}
                    left='20%'
                    top={'20%'}
                >
                    {/* <Cloud /> */}
                </Box>
                <Ghost jump={animate ? "animate head" : "notanimated head"} frown={nabrak} />
                <Obstacle/>
            </Flex>
        </Center>
        <br />
        <Text
            fontStyle={'bold'}
            color={Day ? "black" : "white"}
            className="prevent-select"
        >
            <b>
                {newscore ? "NEW HIGH SCORE!" : ""}
            </b>
        </Text>
    </Box >);
}

export default Ingame;