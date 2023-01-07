import "./burger.css"
import { Image, Box } from "@chakra-ui/react"

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
                <div className></div>
                <div className="burgerdevilsesame-seed one"></div>
                <div className="burgerdevilsesame-seed two"></div>
                <div className="burgerdevilsesame-seed three"></div>
            </div>
            {/* <div className="burgerdevilcosmic-fill">
            </div> */}
            <div className="burgerdevilmouth">
                <Box className="burgerdevilteeth">
                    <Image className="burgerdeviltooth tooth1" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />
                    <Image className="burgerdeviltooth tooth2" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />
                    <Image className="burgerdeviltooth tooth3" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />
                    <Image className="burgerdeviltooth tooth4" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />
                </Box>
                
                <div className="burgerdevilteeth2">
                    <Image className="burgerdeviltooth tooth1" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />
                    <Image className="burgerdeviltooth tooth2" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />
                    <Image className="burgerdeviltooth tooth3" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />
                    <Image className="burgerdeviltooth tooth4" src="https://svgsilh.com/svg/150717.svg" filter={"invert(1)"} alt="" />

                </div>
            </div>
            <div className="burgerdevilbun bottom"></div>
        </div>
    </>)
}