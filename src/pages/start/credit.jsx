import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { Fragment } from 'react';
import { Customtext } from "../utils/Customtext";
import { ButtonTemplate1 } from './Button';

function Credit() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Fragment>
            <ButtonTemplate1
                height="60px"
                width="100px"
                bgColor="gray.700"
                content="Credit"
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader bgColor={"gray.700"}>
                        <Customtext content="Credit"/>
                    </ModalHeader>
                    <ModalCloseButton color={"white"} />
                    <ModalBody>
                        Aurelius Ivan Wijaya (creator)
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default Credit;