import React, { Fragment, useEffect, useState } from 'react'
import { Button, Center, Flex, GridItem, Box, Grid } from '@chakra-ui/react'
import supabase from '../../supabaseconfig/supabaseClient';
import Leaderboardcard from './Leaderboardcard';
import { Customtext } from '../../utils/Customtext';
import "./leaderboard.css"



function Leaderboard(props) {
    const [arr, Setarr] = useState(null);

    useEffect(() => {
        const fetchnama = async () => {
            const { data, error } = await supabase
                .from('Leaderboard')
                .select()
                .order('score', { ascending: false })
            if (error) {
                Setarr(null);
            }
            if (data) {
                Setarr(data);
            }
        }
        fetchnama();
    }, [])

    return (
        <Fragment>
            {arr ?
                (<Box
                    className="Leaderboardpage"
                >

                    <Grid templateColumns='repeat(3, 1fr)'>
                        <GridItem textAlign={'left'}>
                            <Button onClick={() => {
                                props.handleClick('start');
                            }}>
                                <Customtext content="BACK" />
                            </Button>
                        </GridItem>
                        <GridItem>
                            <Center fontSize="20px" color={'white'}>
                                <Customtext content="Leaderboard" />
                            </Center>
                        </GridItem>
                        <GridItem></GridItem>
                    </Grid>
                    <GridItem
                        color={'white'}
                        bgColor="green"
                    >
                        <Flex>
                            <Flex justifyContent={'center'} color="green" bg={"white"} alignItems='center' fontSize="15px" width={'15%'} height="40px" border={'1px solid white'}>
                                RANK
                            </Flex>
                            <Flex alignItems='center' justifyContent={'center'} color="green" bg={"white"} padding={'10px'} fontSize="15px" width={'65%'} height="40px" textAlign={'left'} border={'1px solid white'}>
                                PLAYER NAME
                            </Flex>
                            <Flex alignItems='center' justifyContent={'center'} color="green" bg={"white"} padding={'10px'} fontSize="15px" width={'20%'} height="40px" textAlign={'left'} border={'1px solid white'}>
                                SCORE
                            </Flex>
                        </Flex>
                    </GridItem>
                    {
                        arr.filter(data => data.name !== null).map((filtered, index) => (
                            <Leaderboardcard key={filtered.id} name={filtered.name} id={index + 1} score={filtered.score} />
                        )
                        )
                    }
                </Box>
                ) : (<Fragment>
                    Loading Now...
                </Fragment>)
            }
        </Fragment>
    )

}

export default Leaderboard;