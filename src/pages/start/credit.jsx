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
                <ModalContent width={"300px"}>
                    <ModalHeader bgColor={"gray.700"}>
                        <Customtext content="Credit" />
                    </ModalHeader>
                    <ModalCloseButton color={"white"} />
                    <ModalBody padding={"10px"} bgColor="gray.700">
                        <Customtext content="Aurelius Ivan Wijaya (Creator)" />
                    </ModalBody>
                    <ModalFooter>
                        "Yang punya project datang lah kepada sayaaaaaaaa!!!"
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default Credit;