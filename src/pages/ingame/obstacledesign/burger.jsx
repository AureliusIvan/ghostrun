import "./burger.css"
import { Box, Center } from "@chakra-ui/react"

export function Burger() {
    return (<>
        <div className="burger">
            <div className="bun top">
                <div className="burgereyes">
                    <div className="burgereyebrow left"></div>
                    <div className="burgereyebrow right"></div>
                    <div className="burgereye left"></div>
                    <div className="burgereye right"></div>
                </div>
                <div className></div>
                <div className="sesame-seed one"></div>
                <div className="sesame-seed two"></div>
                <div className="sesame-seed three"></div>
            </div>
            <div className="cosmic-fill">
            </div>
            <div className="bun bottom"></div>
        </div>
    </>)
}





function BurgerDevilMouth() {
    return (
        <div className="burgerdevilmouth">
            <Box className="burgerdevilteeth">
                <Box className="burgerdeviltooth tooth1" />
                <Box className="burgerdeviltooth tooth2" />
                <Box className="burgerdeviltooth tooth3" />
            </Box>

            <div className="burgerdevilteeth2">
                <Center>
                    <Box className="burgerdeviltooth tooth1" />
                    <Box className="burgerdeviltooth tooth2" />
                </Center>
            </div>
        </div>)
}

export function BurgerDevil() {
    return (<>
        <div className="burgerdevil">
            <div className="burgerdevilbun top">
                <div className="burgerdevilburgereyes">
                    <div className="burgerdevilburgereyebrow left"></div>
                    <div className="burgerdevilburgereyebrow right"></div>
                    <div className="burgerdevilburgereye left"></div>
                    <div className="burgerdevilburgereye right"></div>
                </div>
                <BurgerDevilMouth />
                <div className="burgerdevilsesame-seed one"></div>
                <div className="burgerdevilsesame-seed two"></div>
                <div className="burgerdevilsesame-seed three"></div>
            </div>
            <div className="burgerdevilbun bottom"></div>
        </div>
    </>)
}