import './Start.scss';

import {Center, Grid, GridItem,} from '@chakra-ui/react';
import GhostOnStart from './GhostForStart/ghostforstart'
import Credit from './credit';
import Achievement from './achievment/Achievement';
import {getCookie} from 'react-use-cookie';
import {Button} from '../../Component/StyledComponent/CustomButton/CustomButton';


function Banner() {
  const highScore = getCookie('highScore');
  return (
      <div className='Banner'>
        BEST : {highScore ? highScore : 0}!
      </div>
  );
}

function Start(props) {
  const startgame = () => {
    props.handleClick('ingame')
  }
  return (
      <div className="Start">
        <Banner/>
        <Grid
            className="Grid"
            h="100%"
            templateColumns="repeat(3, 1fr)"
        >
          <GridItem w='100%' h='20px' padding={"10px"} className="gridItems" rowSpan={1} colSpan={3}>
            <Achievement/>
          </GridItem>
          <GridItem w='100%' h='350px' className="gridItems" rowSpan={1} colSpan={3}>
            <Center>
              <GhostOnStart/>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
          </GridItem>
          <GridItem className="gridItems" rowSpan={1} colSpan={3}>
            <Button
                fontSize="20px"
                bgColor="yellow.400"
                onClick={startgame}
            >
              START RUNNING!
            </Button>
          </GridItem>
          <GridItem className="gridItems" rowSpan={1} colSpan={3}>
            <Credit/>
          </GridItem>
        </Grid>
      </div>
  );
}

export default Start;