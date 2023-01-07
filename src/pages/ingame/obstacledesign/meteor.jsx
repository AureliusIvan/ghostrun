import meteor from "../../../asset/image/meteor.png"
import { Image, Box } from "@chakra-ui/react"
import "./meteor.css"

export function Meteor() {
    return (<>
        <Image rel="preload"
            transform={"translateX(10px) translateY(-50px) scale(1.7)"}
            src={meteor} />
    </>)
}

export function IceCream() {
    return (<>
        <Box transform={"scale(0.10) translate(180px, -3500px)"}>
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