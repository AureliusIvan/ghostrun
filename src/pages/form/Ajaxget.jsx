import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Button } from '@chakra-ui/button';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Textarea
} from '@chakra-ui/react'
import { wrapHandler } from 'framer-motion';
import { getCurrentDate } from '../utils/Date';
import supabase from '../../supabaseconfig/supabaseClient';
import Leaderboardcard from './Leaderboardcard';
import { Center } from '@chakra-ui/layout';
// import { supabase } from './supabase';

function AjaxGetExample() {
    const [dataa, SetDataa] = useState([]);
    const [id, Setid] = useState("2");
    const [nama, Setnama] = useState("Player123");
    const [score, Setscore] = useState("4");
    const [comment, Setcomment] = useState("isi disini yes");
    const [date, Setdate] = useState(getCurrentDate());

    // 
    const [fetchError, SetfetchError] = useState(null);
    const [namee, Setnamee] = useState(null);

    useEffect(() => {
        const fetchnama = async () => {
            const { data, error } = await supabase
                .from('Leaderboard')
                .select()
            if (error) {
                SetfetchError("Could not Fetch");
                Setnamee(null);
                console.log(error);
            }
            if (data) {
                Setnamee(data);
                console.log(data);
                SetfetchError(null);
            }
        }
        fetchnama();
    }, [])


    return (<Box>
        <Box>
            {namee &&
                (<>
                    <Center>Leaderboard</Center>
                    <Box>
                        {
                            namee.map(data => (
                                <Leaderboardcard key={data.id} name={data.name} id={data.id} score={data.score} />
                            ))
                        }
                    </Box>
                </>
                )

            }
        </Box>
    </Box>)

}

export default AjaxGetExample;