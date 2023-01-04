import { GridItem, Flex } from "@chakra-ui/layout";
import "./Star.css"

function Leaderboardcard(props) {
    return (<>
        <GridItem
            color={'white'}
            bgColor="green"
            // className="title"
            overflow={'hidden'}
        >
            <Flex>
                <Flex justifyContent={'center'} alignItems='center' fontSize="15px" width={'15%'} height="40px" border={'1px solid white'}>
                    {props.id}
                </Flex>
                <Flex className="dot" alignItems='center' padding={'10px'} fontSize="15px" width={'65%'} height="40px" textAlign={'left'} border={'1px solid white'}>
                    {props.name}
                </Flex>
                <Flex alignItems='center' padding={'10px'} fontSize="15px" width={'20%'} height="40px" textAlign={'left'} border={'1px solid white'}>
                    {props.score}
                </Flex>
            </Flex>
        </GridItem>
    </>);
}

export default Leaderboardcard;