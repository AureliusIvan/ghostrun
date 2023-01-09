import "./circle.css"
import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"
import { useRef, useState } from "react"



function Testbox1({childref1}) {
    return (
        <Box ref={childref1}>
            ini textbox1
        </Box>
    )
}

function Testbox2({childref2}) {
    return (
        <Box ref={childref2 }>
            ini textbox2
        </Box>
    )
}



export function Testcircle() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    function handleclick() {
        console.log(ref1.current);
        console.log(ref2.current);
    }
    return (<>
        <Box>
            <Testbox1 childref1={ref1}/>
            <Testbox2 childref2={ref2}/>
            <Button onClick={handleclick}>test</Button>
        </Box>
    </>)
}