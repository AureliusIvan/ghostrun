import { Text } from "@chakra-ui/react";


export function Customtext(props) {
    return (
        <Text
            color={"white"}
            fontSize={props.fontSize}
            fontWeight={"light"}
            textShadow={"1px 3px 1px black, 0 0 1px black, 0 0 1px black"}
            zIndex={10}
        >
            {props.children}
        </Text>
    );
}