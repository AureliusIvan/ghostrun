import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import {
    Button
} from '@chakra-ui/react'
import { Center, Flex, GridItem } from '@chakra-ui/layout';
import supabase from '../../supabaseconfig/supabaseClient';
import Leaderboardcard from './Leaderboardcard';
import { Customtext } from '../utils/Customtext';
function Leaderboard(props) {
    const [namee, Setnamee] = useState(null);

    useEffect(() => {
        const fetchnama = async () => {
            const { data, error } = await supabase
                .from('Leaderboard')
                .select()
                .order('score', { ascending: false })
            if (error) {
                Setnamee(null);
            }
            if (data) {
                Setnamee(data);
            }
        }
        fetchnama();
    }, [])


    return (<Fragment>
        {namee &&
            (<Fragment>
                <Button onClick={() => {
                    props.handleClick('start');
                }}>
                    <Customtext content="back"/>
                </Button>
                <Center fontSize="20px" color={'white'}>Leaderboard</Center>
                <GridItem
                    color={'white'}
                    bgColor="green"
                    // className="title"
                    overflow={'hidden'}
                >
                    <Flex>
                        <Flex justifyContent={'center'} color="green" bg={"white"} alignItems='center' fontSize="15px" width={'15%'} height="40px" border={'1px solid white'}>
                            ID
                        </Flex>
                        <Flex alignItems='center' justifyContent={'center'} color="green" bg={"white"} padding={'10px'} fontSize="15px" width={'65%'} height="40px" textAlign={'left'} border={'1px solid white'}>
                            PLAYER NAME
                        </Flex>
                        <Flex alignItems='center' justifyContent={'center'} color="green" bg={"white"} padding={'10px'} fontSize="15px" width={'20%'} height="40px" textAlign={'left'} border={'1px solid white'}>
                            Score
                        </Flex>
                    </Flex>
                </GridItem>
                {
                    namee.map(data => (
                        <Leaderboardcard key={data.id} name={data.name} id={data.id} score={data.score} />
                    ))
                }
            </Fragment>
            )

        }
    </Fragment>)

}

export default Leaderboard;