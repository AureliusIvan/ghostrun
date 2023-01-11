import { Fragment } from "react";
import { Button, Box } from "@chakra-ui/react";

export function ButtonTemplate(props) {
    return (<Fragment>
        <Button
            marginInline={"5px"}
            width={props.width}
            height={props.height}
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
                {props.content}
            </Box>
        </Button>
    </Fragment>)

}
