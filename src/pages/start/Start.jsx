import {
    Box,
    Center,
    Text,
    Grid,
    GridItem,
    Flex,
    Input,
    Button
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './Start.css';
import Ghostforstart from './ghostforstart';
import { ButtonTemplate1 } from './Button';
import { useCookies } from 'react-cookie';
// import { Customtext } from '../utils/Customtext';
import supabase from '../../supabaseconfig/supabaseClient';
import Credit from './credit';
import Achievment from './achievment/Achievment';


function Start(props) {
    const [playername2, Setplayername2] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const [id, Setid] = useState("");


    // 
    function namehandler() {
        setCookie('Name', playername2, { path: '/' });
    }
    const createnama = async () => {
        const { data, error } = await supabase
            .from('Leaderboard')
            .insert({ name: null })
    }
    const fetchnama = async () => {
        const { data, error } = await supabase
            .from('Leaderboard')
            .select('id')
            .order('id', { ascending: false })
            .limit(1)
        if (error) {
            Setid(null);
        }
        if (data) {
            setCookie('id', data[0].id, { path: '/' });

        }
    }

    useEffect(() => {
        Setplayername2(cookies.Name);
        if (!cookies.id) {
            fetchnama();
            createnama();
        }
    }, [])
    return (
        <Box
            draggable="false"
            background="linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)"
            bgPos="center"
            position="fixed"
            width="100%"
            height="100vh"
            id='startbody'
        >
            <Grid
                className="Grid"
                h="100%"
                templateColumns="repeat(3, 1fr)"
            >
                <GridItem w='100%' h='20px' padding={"10px"} className="gridItems" rowSpan={1} colSpan={3}>
                    <Achievment />
                </GridItem>
                <GridItem w='100%' h='350px' className="gridItems" rowSpan={1} colSpan={3}>
                    <Center>
                        <Ghostforstart />
                    </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Text>Masukin nama kamu </Text>
                    <Input htmlSize={4} width='240px' zIndex={100} variant='filled' placeholder='INPUT PLAYER NAME' defaultValue={playername2} onInputCapture={e => {
                        Setplayername2(e.target.value);
                    }} />
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
                            namehandler();
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
                    <Credit />
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Start;
