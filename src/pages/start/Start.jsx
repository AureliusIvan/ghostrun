import {
    Box,
    Image,
    Center,
    Button,
    Text,
    Grid,
    GridItem,
    VStack,
    Flex
} from '@chakra-ui/react';

import './Start.css';
import startsound from "../../asset/sound/start.mp3";
import useSound from 'use-sound';
import Ghostforstart from './ghostforstart';

function Start(props) {
    const [play] = useSound(startsound);
    return (
        <Box
            draggable="false"
            // bgImage={mainBG}
            bgSize={{ md: 'cover', base: 'contain' }}
            bgColor="rgb(158, 211, 255)"
            bgPos="center"
            position="fixed"
            width="100%"
            height="100%"
            zIndex="100"
        >
            <Grid
                className="Grid"
                h="10vh"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={0}
            >
                <GridItem rowSpan={1} colSpan={3}>
                    <Center mt="30px" gap="10px">
                        <Text
                            pos={'absolute'}
                            top={['60%', '56%', '56%']}
                            zIndex={100}
                            borderRadius="50px"
                            w={['300px', '400px']}
                            textAlign="center"
                            padding="1px"
                            // bgColor={'purple'}
                            // bgGradient="linear(to-l, #7928CA, #FF0080)"
                            color="white"
                            fontSize={['40px', '50px']}
                            className="prevent-select glow"
                        >
                            GHOST RUN
                        </Text>
                    </Center>
                </GridItem>
            </Grid>
            <Grid
                className="Grid"
                h="60vh"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={0}
                justifyContent='center'
                alignContent={'center'}
                textAlign='center'
            >
                <GridItem className="gridItems" rowSpan={1} colSpan={3} textAlign='center'
                    paddingTop={'70px'}>
                    <Flex justifyContent={'center'}
                        textAlign='center'
                        alignContent={'center'}
                        alignItems='center'
                        alignSelf={'center'}
                    >
                        <Ghostforstart/>
                    </Flex>
                </GridItem>
            </Grid>
            <Grid
                className="Grid"
                h="20vh"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={0}
            >
                <GridItem className="gridItems" rowSpan={1} colSpan={3}>
                    <VStack spacing={5}>
                        <Button
                            width="80px"
                            height="80px"
                            borderRadius="50%"
                            onClick={() => {
                                props.handleClick('ingame');
                                play();
                            }}
                            // onMouseDown={playActive}
                            pointerEvents="all"
                            transition="0.5s"
                            _hover={{
                                transform: 'scale(1.2)',
                                bgGradient: 'linear(to-r, red.400, yellow.400)',
                            }}
                            shadow="xl"
                            bgColor={"purple"}
                            // bgGradient="linear(to-l, red.500, yellow.500)"
                            filter="invert(1)"
                            // paddingTop="200px"
                            paddingLeft={'25px'}
                            className="StartBTN"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                            </svg>
                        </Button>
                        {/* <Credit content="test" /> */}
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Start;
