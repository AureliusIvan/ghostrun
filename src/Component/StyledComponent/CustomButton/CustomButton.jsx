import { Button as B, Box } from "@chakra-ui/react";

export function Button(props) {
    return (
        <B
            marginInline={"5px"}
            width={props.width ? props.width : "240px"}
            height={props.height ? props.height : "60px"}
            onClick={props.onClick}
            pointerEvents="all"
            transition="0.5s"
            _hover={{
                transform: 'skeWX(0) scale(0.9)',
            }}
            zIndex="100"
            borderRadius={props.borderRadius}
            bgColor={props.bgColor}
            color={"white"}
            fontSize={props.fontSize}
            fontWeight={"light"}
            textShadow={"1px 3px 1px black, 0 0 1px black, 0 0 1px black"}
            boxShadow={"0px 8px 15px rgba(0, 0, 0, 0.1)"}
            borderTop={"5px solid orange"}
            borderBottom={"2px solid black"}
        >
            <Box
                className={props.className}
                bgColor={props.bgColor}

            >
                {props.children}
            </Box>
        </B>
    )

}
