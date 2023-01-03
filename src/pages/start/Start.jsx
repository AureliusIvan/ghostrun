import {
    Box,
    Center,
    Button,
    Text,
    Grid,
    GridItem,
    Flex,
    Input
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AllContext } from '../../Value/AllContext';
import supabase from '../../supabaseconfig/supabaseClient';
import './Start.css';
import Ghostforstart from './ghostforstart';
import AjaxGetExample from '../form/Leaderboard';

function Start(props) {
    const { playername, Setplayername } = useContext(AllContext);
    function namehandler(e){
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
                {/* leaderboard */}
                <GridItem rowSpan={1} colSpan={3}>
                    <Text overflowY={'scroll'} pos='absolute' left="0" right="0" top="35%" margin="auto" zIndex="50" border="10px solid brown" borderRadius={"10px"} bgColor="green" color="black" width="300px" height="200px" padding="10px">
                        <AjaxGetExample />
                    </Text>
                </GridItem>
                {/*  */}
                <GridItem rowSpan={1} colSpan={3}>
                    {/* info */}
                    <Text bgColor="yellow" color="black" width="200px" padding="10px" zIndex={102} >Under Development!</Text>
                </GridItem>
                {/* {input name} */}
                <GridItem rowSpan={1} colSpan={3}>
                    <Input value={playername} marginTop={"1px"} htmlSize={4} width='200px' zIndex={100} variant='filled' placeholder='INPUT PLAYER NAME' onChangeCapture={namehandler} />
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
                <GridItem className="gridItems" rowSpan={1} colSpan={3}>
                    <Button
                        width="300px"
                        height="80px"
                        borderRadius="20px"
                        onClick={() => {
                            props.handleClick('ingame');
                            // fetchnama();
                        }}
                        pointerEvents="all"
                        transition="0.5s"
                        _hover={{
                            transform: 'scale(1.2)',
                        }}
                        bgColor={"green.700"}
                        color="white"
                        fontSize="30px"
                    >
                        START RUNNING!
                    </Button>
                </GridItem>
                <GridItem className="gridItems" rowSpan={1} colSpan={3}>
                    <Button>Leaderboard</Button>
                    <Button>Credit</Button>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Start;
