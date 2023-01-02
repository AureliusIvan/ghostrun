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
import AjaxGetExample from '../form/Ajaxget';

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
                {/* leaderboard */}
                <GridItem rowSpan={1} colSpan={3}>
                    <Text pos='absolute' left="0" right="0" top="35%" margin="auto" zIndex="50" border="10px solid brown" bgColor="green" color="black" width="300px" height="200px" padding="10px">
                        <AjaxGetExample/>
                    </Text>
                </GridItem>
                {/*  */}
                <GridItem rowSpan={1} colSpan={3}>
                    {/* info */}
                    <Text bgColor="yellow" color="black" width="200px" padding="10px" zIndex={102} >Under Development!</Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Center mt="30px" gap="10px">
                        {/* <Text
                            pos={'absolute'}
                            top={['0%', '0%', '0%']}
                            zIndex={'1 !important'}
                            borderRadius="50px"
                            w={['300px', '400px']}
                            textAlign="center"
                            padding="1px"
                            bgColor={'purple'}
                            color="white"
                            fontSize={['40px', '50px']}
                            className="prevent-select"
                        >
                            GHOST RUN!
                        </Text> */}
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
                        <Ghostforstart />
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
                            width="300px"
                            height="80px"
                            borderRadius="20px"
                            onClick={() => {
                                props.handleClick('ingame');
                                play();
                            }}
                            pointerEvents="all"
                            transition="0.5s"
                            _hover={{
                                transform: 'scale(1.2)',
                                bgGradient: 'linear(to-r, red.400, yellow.400)',
                            }}
                            bgColor={"green.700"}
                            color="white"
                            fontSize="30px"
                        >
                            START RUNNING!
                        </Button>
                        <Button onClick={() => props.handleClick('form')} >credit</Button>
                        {/* <Credit content="test" /> */}
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Start;
