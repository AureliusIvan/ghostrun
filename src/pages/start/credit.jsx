import {
  Card,
  CardBody,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import {Fragment} from 'react';
import {Customtext} from "../../utils/Customtext";
import {ButtonTemplate as Button} from '../../utils/ButtonTemplate';

function Credit() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
      <Fragment>
        <Button
            bgColor="gray.700"
            content="Credit"
            onClick={onOpen}
        >
          Credit
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent width={"300px"}>
            <ModalHeader bgColor={"gray.700"}>
              <Customtext content="Credit"/>
            </ModalHeader>
            <ModalCloseButton color={"white"}/>
            <ModalBody padding={"10px"} bgColor="gray.900">

              <Customtext content="Aurelius Ivan Wijaya (Creator)"/>
              <HStack>
                <a href="https://www.instagram.com/aureli.van/">
                  <svg filter='invert(1)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"
                       height="24px">
                    <path
                        d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/>
                  </svg>
                </a>
                <a href="mailto:aurelius.ivan@student.umn.ac.id">
                  <svg filter='invert(1)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px"
                       height="30px">
                    <path
                        d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"/>
                  </svg>
                </a>
              </HStack>
            </ModalBody>
            <ModalFooter>
              <Card>
                <CardBody>
                  <Text>* Soundtrack:
                    Plant VS Zombie (Mini Games Stage)
                  </Text>
                </CardBody>
              </Card>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Fragment>
  )
}

export default Credit;