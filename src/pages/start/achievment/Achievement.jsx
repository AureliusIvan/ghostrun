import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import {Fragment, useEffect, useState} from 'react';
import {Customtext} from '../../../utils/Customtext';
import Cross from "../../../asset/image/cross.svg";
import Check from "../../../asset/image/check.svg";
import {useCookies} from 'react-cookie';


function Achievement() {
  const [cookies] = useCookies(['user']);
  const [point, setPoint] = useState({
    Newbie: false,
    WalkInThePark: false,
    SportEnthusiast: false,
    Athelete: false,
    Ninja: false,
    Ghostrunner: false
  });

  useEffect(() => {
    if (cookies.highScore >= 1) {
      setPoint({Newbie: true})
    }
    if (cookies.highScore >= 500) {
      setPoint({
        WalkInThePark: true,
        Newbie: true
      });
    }
    if (cookies.highScore >= 1000) {
      setPoint({
        SportEnthusiast: true,
        WalkInThePark: true,
        Newbie: true
      });
    }
    if (cookies.highScore >= 2000) {
      setPoint({
        SportEnthusiast: true,
        WalkInThePark: true,
        Newbie: true,
        Athelete: true
      });
    }
    if (cookies.highScore >= 3000) {
      setPoint({
        Ninja: true,
        SportEnthusiast: true,
        WalkInThePark: true,
        Newbie: true,
        Athelete: true
      })
    }
    if (cookies.highScore >= 4000) {
      setPoint({
        Ghostrunner: true,
        Ninja: true,
        SportEnthusiast: true,
        WalkInThePark: true,
        Newbie: true,
        Athelete: true
      })
    }
  }, [])

  function AchievmentCard(props) {
    return (<Box
        borderRadius="20px"
        bgColor={"gray.700"}
        border="4px solid black"
        height={'70px'}
        padding="10px"
        marginBlockEnd={"10px"}
        position="relative"
    >
      <Image/>
      <Box
          bgColor={props.Done === true ? "green" : "red"}
          borderRadius="50%"
          width={"40px"}
          height="40px"
          position={"absolute"}
          top="0px"
          bottom={0}
          margin="auto"
          right={"10px"}
          padding="10px"
      >
        {props.Done === true ? <Image src={Check} filter="invert(1)"/> : <Image src={Cross} filter="invert(1)"/>}
      </Box>
      <Customtext content={props.title}/>
      <Text fontSize={"10px"} color={"whiteAlpha.800"}>{props.desc}</Text>
    </Box>)
  }


  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
      <Fragment>
        <Button
            width='40px'
            height='40px'
            onClick={onOpen}
            pointerEvents="all"
            transition="0.5s"
            zIndex="100"
            borderRadius={'50%'}
            bgColor={'black'}
            color={"white"}
            fontSize={'20px'}
            fontWeight={"light"}
            textShadow={"1px 3px 1px black, 0 0 1px black, 0 0 1px black"}
            border="3px solid white"
        >
          🏆
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader bgColor={"gray.700"}>
              <Customtext content="Achievements"/>
            </ModalHeader>
            <ModalCloseButton color={"white"}/>
            <ModalBody>
              <AchievmentCard Done={point.Newbie} title="Newbie" desc="Run for the first time!"/>
              <AchievmentCard Done={point.WalkInThePark} title="Walk In The Park" desc="Reach 500 points of Highscore!"/>
              <AchievmentCard Done={point.SportEnthusiast} title="Sport Enthusiast"
                              desc="Reach 1000 points of Highscore!"/>
              <AchievmentCard Done={point.Athelete} title="Athelete" desc="Reach 2000 points of Highscore!"/>
              <AchievmentCard Done={point.Ninja} title="Ninja" desc="Reach 3000 points of Highscore!"/>
              <AchievmentCard Done={point.Ghostrunner} title="Ghostrunner" desc="Reach 4000 points of Highscore!"/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Fragment>
  )
}

export default Achievement;