import { Flex, Box, Center, Text, Button, Image } from "@chakra-ui/react";
import { useState, useEffect, useRef, useContext } from "react";
import "./Game.css"
import Ghost from "../../character/Ghost";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure
} from '@chakra-ui/react'
import { AllContext } from "../../Value/AllContext";
import useSound from 'use-sound';
// sound
import jumpsound from '../../asset/sound/jump.mp3'
import crashsound from '../../asset/sound/crash.mp3'
import poinsound from '../../asset/sound/poin.mp3'
import restartsound from '../../asset/sound/restart.mp3'
import { Cloud } from "./cloud";
import woodbox from "../../asset/image/box.svg"

function Obstacle() {
    return (
        <Box
            id="block"
            // bg={woodbox}
            width="20px"
            height="20px"
            objectFit='cover'
            className="prevent-select"
        >
            <Image src={woodbox} />
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
    // level speed and challenge
    const [level, SetLevel] = useState(1);
    // score
    const { highScore, SethighScore } = useContext(AllContext);
    const [newscore, Setnewscore] = useState(false);
    // all sound
    const [play] = useSound(jumpsound);
    const [playcrashsound] = useSound(crashsound);
    const [playpoinsound] = useSound(poinsound);
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

    useInterval(() => {
        if (nabrak === false) {
            setCounter(counter + 1);
        }
        // siang
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
    }, 50);

    // Checks if two elements collide
    const elementsColliding = function (el1, el2) {
        const a = el1.getBoundingClientRect()
        const b = el2.getBoundingClientRect()
        if (
            (((b.left) <= (a.right + 10)) && ((b.right) > (a.right)) && ((a.top) > (b.top - a.height)))) {
            // console.log(a.left);
            // console.log(a.right);
            // console.log(a.width);
            // console.log(a.height);
            // console.log(b.left);
            // console.log(b.right);
            return true
        }
        return false
    }


    useEffect(() => {
        const setDelay = delay => new Promise(resolve => {
            // console.log(`Process running for ${delay}`);

            setTimeout(() => {
                // console.log('Process done');
                resolve();
            }, delay);
        });

        setDelay(3000)
            .then(() => setDelay(100))
            .then(() => setDelay(200))
            .then(() => setDelay(300));
    }, [])
    // 
    const [nabrak, setNabrak] = useState(false);
    useEffect(() => {


        if (counter > highScore) {
            SethighScore(counter);
            Setnewscore(true);
        }
        let character = document.getElementById("character");
        let block = document.getElementById("block");
        var colide = elementsColliding(character, block);
        if (colide === true) {
            setNabrak(true);
            if (nabrak === true) {
                playcrashsound();
            }
            onOpen();
            let character = document.getElementById("character");
            let block = document.getElementById("block");
            character.style.animationPlayState = 'paused';
            block.style.animationPlayState = 'paused';
        }
    });

    // mouse down and up
    const [mouseDown, setMouseDown] = useState(false);
    const [animate, Setanimate] = useState(false);
    function OnMouseDown() {
        setMouseDown(true);
        // if (nabrak == false) {
        //     setMouseDown(true);
        // }
        Setanimate(true);
        setTimeout(() => {
            Setanimate(false);
            
        }, 1700);
        // Setanimate(false);
        // setMouseDown(false);
    };


    // jumppp 
    function Jump() {

    }


    // return display
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
                <ModalHeader color={'white'}>
                    <Center className="prevent-select">
                        Nabrak Cok!
                    </Center>
                </ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                    <Center>
                        <Button
                            onClick={() => {
                                props.handleClick('start')
                                playrestartsound({ id: 'sound' });
                            }}
                            colorScheme='blue' mr={3}
                            className="prevent-select"
                        >
                            Restart
                        </Button>
                    </Center>
                </ModalBody>

                <ModalFooter>

                </ModalFooter>
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
                transform={['scale(0.7)', 'scale(1)', 'scale(1.2)']}
            >
                <Box
                    pos={'absolute'}
                    left='50%'
                    top={'30%'}
                >
                    <Cloud />
                </Box>
                <Box
                    pos={'absolute'}
                    left='20%'
                    top={'20%'}
                >
                    <Cloud />
                </Box>
                {/* <Cloud left="70%"/> */}
                {/* <Ghost jump={mouseDown ? "animate head" : "head"} AnimationEnd={AnimationEnd} frown={nabrak} /> */}
                <Ghost jump={animate ? "animate head" : "notanimated head"} frown={nabrak} />
                <Obstacle />
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