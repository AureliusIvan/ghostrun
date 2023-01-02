import "./circle.css"
import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"

export function Testcircle() {


    function Startanimate() {
        document.querySelectorAll('.circle').forEach(e => {
            e.classList.add('loaded');
        })
        // handle the resize for this demo
        document.body.onresize = e => {
            console.log('Demo Resized - Resetting the Transition')
            // remove the class
            document.querySelectorAll('.circle').forEach(e => {
                e.classList.remove('loaded')
            })
            setTimeout(e => {
                console.log('Transition Start');
                document.body.onload()
            }, 3000)
        }
    }
    return (<>
        test
        <Box>
            <div class="circle first"></div>
            <div class="circle second"></div>
        </Box>
        <Button onClick={Startanimate}>Start</Button>
    </>)
}