import "./circle.css"
import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"
import { useState } from "react"

export function Testcircle() {
    const [animate, Setanimate] = useState(false);

    function Startanimate() {
        document.querySelectorAll('.circle').forEach(e => {
            e.classList.add('loaded');
            setTimeout(e => {
                document.querySelectorAll('.circle').forEach(e => {
                    e.classList.remove('loaded')
                })
            }, 500)

        })
    }

    function Resetanimate() {
        document.querySelectorAll('.circle').forEach(e => {
            e.classList.remove('loaded')
        })
    }

    return (<>
        test
        <Box padding={"100px"}>
            <div class="circle first"></div>
            <div class="circle second"></div>
        </Box>
        <Button onClick={() => {
            Startanimate()
            // Setanimate(!animate);
            // if (animate === true) {
            //     Startanimate();
            // }
            // else {
            //     Resetanimate();
            // }
        }

        }>Start</Button>
    </>)
}