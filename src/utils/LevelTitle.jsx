import { Text } from "@chakra-ui/react";

export function LevelTitle(props) {
    return (
        <Text
            position={"absolute"}
            bottom="0"
            left={"0"}
            right="0"
            margin="auto"
            color={"white"}
            fontSize={"20px"}
            fontWeight={"light"}
            textShadow={"1px 3px 1px black, 0 0 1px black, 0 0 1px black"}
            zIndex={10}
        >
            {props.content}
        </Text>
    );
}