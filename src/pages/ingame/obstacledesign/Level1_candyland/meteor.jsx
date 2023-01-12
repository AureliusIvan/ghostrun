import { Image, Box } from "@chakra-ui/react"
import "./meteor.css"

export function IceCream() {
    return (<>
        <Box transform={"scale(0.07) translate(0px, -5100px)"}>
            <div className="icecreamcontainer">
                <div className="ice-cream">
                    <div className="icecreamglare"></div>
                    <div className="icecreamface">
                        <div className="icecreameyes">
                            <div className="icecreameye left"></div>
                            <div className="icecreameye right"></div>
                        </div>
                        <div className="icecreammouth"></div>
                    </div>
                </div>
                <div className="icecreamstick"></div>
            </div>
        </Box>
    </>)
}