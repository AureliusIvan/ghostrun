import {
    Box,
    Center,
    Text,
    Grid,
    GridItem,
    Input,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import './Start.css';
import Ghostforstart from './GhostForStart/ghostforstart'
import { ButtonTemplate } from '../../utils/ButtonTemplate';
import { useCookies } from 'react-cookie';
import supabase from '../../supabaseconfig/supabaseClient';
import Credit from './credit';
import Achievment from './achievment/Achievment';
import { Customtext } from '../../utils/Customtext';
import useSound from 'use-sound';
import { AllContext } from '../../Value/AllContext';



function Start(props) {
    const { played, Setplayed } = useContext(AllContext);
    const [playername, Setplayername] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

    function namehandler() {
        setCookie('Name', playername, { path: '/' });
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
        if (data) {
            setCookie('id', data[0].id, { path: '/' });

        }
    }

    useEffect(() => {
        Setplayername(cookies.Name);
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
            width="100%"
            height="100vh"
            id='startbody'
            overflow={"hidden"}
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
                    <Customtext content="Masukin Nama Kamu" />
                    <Input htmlSize={4} width='240px' zIndex={100} variant='filled' placeholder='INPUT PLAYER NAME' defaultValue={playername} onInputCapture={e => {
                        Setplayername(e.target.value);
                    }} />
                </GridItem>
                <GridItem className="gridItems" rowSpan={1} colSpan={3}>
                    <ButtonTemplate
                        height="60px"
                        width="240px"
                        fontSize="20px"
                        bgColor="yellow.400"
                        content="START RUNNING!"
                        onClick={function () {
                            props.handleClick('ingame');
                            props.handleOST(true);
                            namehandler();
                        }}
                    />
                </GridItem>
                <GridItem className="gridItems" rowSpan={1} colSpan={3}>
                    <ButtonTemplate
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
