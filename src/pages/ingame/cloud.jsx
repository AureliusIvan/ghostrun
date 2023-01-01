import { Box } from "@chakra-ui/react"

export function Cloud(props) {
    return (<>
            <div
            style={props.style}
                className="center">
                <Box id="cloud"></Box>
            </div>
    </>)
}