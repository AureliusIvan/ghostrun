import {
    Box,
    Center,
    Text,
    Grid,
    GridItem,
    Flex,
    Input
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AllContext } from '../../Value/AllContext';
// import supabase from '../../supabaseconfig/supabaseClient';
import './Start.css';
import Ghostforstart from './ghostforstart';
import { ButtonTemplate1 } from './Button';
import Leaderboard from '../form/Leaderboard';

function Start(props) {
    const { playername, Setplayername } = useContext(AllContext);
    function namehandler(e) {
        Setplayername(e.target.value);
        console.log(playername);
    }

    return (
        <Box
            draggable="false"
            bgColor="rgb(158, 211, 255)"
            bgPos="center"
            position="fixed"
            width="100%"
            height="100%"
        >
            <Grid
                className="Grid"
                h="10vh"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={0}
            >
                {/*  */}
                <GridItem rowSpan={1} colSpan={3}>
                    {/* info */}
                    <Text bgColor="yellow.500" color="white" width="200px" padding="10px" zIndex={102} >Under Development!</Text>
                </GridItem>

                <GridItem rowSpan={1} colSpan={3}>
                    <Center mt="30px" gap="10px">
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
                {/* {input name} */}
                <GridItem rowSpan={1} colSpan={3}>
                    <Input defaultValue={"player"} marginTop={"1px"} htmlSize={4} width='240px' zIndex={100} variant='filled' placeholder='INPUT PLAYER NAME' onChangeCapture={namehandler} />
                </GridItem>
                <GridItem className="gridItems" rowSpan={1} colSpan={3}>
                    <ButtonTemplate1
                        height="60px"
                        width="240px"
                        fontSize="20px"
                        bgColor="yellow.400"
                        content="START RUNNING!"
                        onClick={() => {
                            props.handleClick('ingame');
                        }}
                    />
                </GridItem>
                <GridItem className="gridItems" rowSpan={1} colSpan={3}>
                    <ButtonTemplate1
                        height="60px"
                        width="125px"
                        bgColor="gray.700"
                        content="Leaderboard"
                        onClick={() => {
                            props.handleClick('leaderboard');
                        }}
                    />
                    <ButtonTemplate1
                        height="60px"
                        width="100px"
                        bgColor="gray.700"
                        content="Credit"
                    />
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Start;
