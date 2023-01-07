import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Box,
    Text
} from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react';
import { Customtext } from '../../utils/Customtext';
// import AchievmentData from './Achievment';
import Cross from "../../../asset/image/cross.svg";
import Check from "../../../asset/image/check.svg";
import { useCookies } from 'react-cookie';


function Databook() {
    const [cookies, setCookie] = useCookies(['user']);
    const [Poin, SetPoin] = useState({
        Newbie: false,
        WalkInThePark: false,
        SportEnthusiast: false,
        Athelete: false,
        Ninja: false,
        Ghostrunner: false
    });

    function DatabookCard(props) {
        return (<Box
            borderRadius="20px"
            bgColor={"gray.700"}
            border="4px solid black"
            height={'70px'}
            padding="10px"
            marginBlockEnd={"10px"}
            position="relative"
        >
            <Image />
            <Box bgColor={props.Done === true ? "green" : "red"}
                borderRadius="50%"
                // borderRightRadius={"50%"}
                width={"40px"}
                height="40px"
                position={"absolute"}
                top="0px"
                bottom={0}
                margin="auto"
                right={"10px"}
                padding="10px"
            >
                {props.Done === true ? <Image src={Check} filter="invert(1)" /> : <Image src={Cross} filter="invert(1)" />}
            </Box>
            <Customtext content={props.title} />
            <Text fontSize={"10px"} color={"whiteAlpha.800"}>{props.desc}</Text>
        </Box>)
    }


    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Fragment>
            <Button
                marginInline={"5px"}
                width='40px'
                height='40px'
                onClick={onOpen}
                pointerEvents="all"
                transition="0.5s"
                _hover={{
                    transform: 'skeWX(0) scale(0.9)',
                }}
                zIndex="100"
                borderRadius={'50%'}
                bgColor={'black'}
                color={"white"}
                fontSize={'20px'}
                fontWeight={"light"}
                textShadow={"1px 3px 1px black, 0 0 1px black, 0 0 1px black"}
                boxShadow={"0px 8px 15px rgba(0, 0, 0, 0.1)"}
                border="5px solid white"
            >
                🏆
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader bgColor={"gray.700"}>
                        <Customtext content="Achievements" />
                    </ModalHeader>
                    <ModalCloseButton color={"white"} />
                    <ModalBody>
                        <Databook title="Newbie" desc="Run for the first time!" />
                        <Databook title="Walk In The Park" desc="Reach 500 points of Highscore!" />
                        <Databook title="Sport Enthusiast" desc="Reach 1000 points of Highscore!" />
                        <Databook title="Athelete" desc="Reach 2000 points of Highscore!" />
                        <Databook title="Ninja" desc="Reach 3000 points of Highscore!" />
                        <Databook title="Ghostrunner" desc="Reach 4000 points of Highscore!" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default Databook;