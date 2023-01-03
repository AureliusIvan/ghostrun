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
    Button,
    Image
} from '@chakra-ui/react';
import { AllContext } from "../../Value/AllContext";
import useSound from 'use-sound';
// import jumpsound from '../../asset/sound/jump.mp3'
import crashsound from '../../asset/sound/crash.mp3'
// import poinsound from '../../asset/sound/poin.mp3'
import restartsound from '../../asset/sound/restart.mp3'
// asset
import { Cloud } from "./cloud";
import woodbox from "../../asset/image/box.jpg"
// context
import supabase from "../../supabaseconfig/supabaseClient";
import Level from "./Level";

function Obstacle() {
    const { size, Setsize } = useContext(AllContext);
    const [size2, Setsize2] = useState(0);
    const [attr, Setattr] = useState({
        transform: "",
        width: "40px",
        height: "40px",
        src: woodbox
    });
    function onIterationend() {
        // maks iterattion
        if (size2 === 3) {
            // maks level
            if(size <= 4 ){
                Setsize(size + 1);
            }
            Setattr({
                transform: Level[size].transform,
                width: Level[size].width,
                height: Level[size].height
            })
            Setsize2(0);
        } else {
            Setsize2(size2 + 1);
        }
        console.log("dor");

    }
    return (
        <Box
            id={'block'}
            className="obstacle"
            width={attr.width}
            height={attr.height}
            objectFit='cover'
            overflow={'hidden'}
            transform={attr.transform}
            bgColor="brown.100"
            border="2px solid black"
            onAnimationIterationCapture={() => {
                console.log("ended");
                onIterationend();
            }}
        >
            <Image rel="preload" scale={1.2} src={woodbox} />
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
    const { playername, Setplayername } = useContext(AllContext);
    const { highScore, SethighScore } = useContext(AllContext);
    const fetchnama = async () => {
        const { data, error } = await supabase
            .from('Leaderboard')
            .insert({ name: playername, score: highScore })
    }
    // // bigger obstacle
    const { size, Setsize } = useContext(AllContext);

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
        const a = el1.getBoundingClientRect();
        const b = el2.getBoundingClientRect();
        if (
            // (((b.left) <= (a.right + 10)) && ((b.right) > (a.right)) && ((a.top) > (b.top - a.height)) && (a.top) > (b.bottom))

            (
                ((b.right) > (a.right)) &&
                // (a.left + a.width) > (b.right) &&
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
        if (
            elementsColliding(character, block) === true
        ) {
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




    function OnMouseDown() {
        Setanimate(true);
        setTimeout(() => {
            Setanimate(false);
        }, 400);
    };


    //return
    return (<Box
        w={'100%'}
        h='100%'
        transition={'0.5s'}
        bgColor={Scene}
        onMouseDownCapture={OnMouseDown}
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
                                Setsize(40);
                                if (playername)
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