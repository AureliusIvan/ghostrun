import "./Mountain.css"
import { Box } from "@chakra-ui/react"

export function Mountain() {
    return (<Box zIndex={-100} className="bgWrapper">
        <div className="mountainbg">
            <div className="mountain">
                <div className="mountain-top">
                    <div className="mountain-cap-1"></div>
                    <div className="mountain-cap-2"></div>
                    <div className="mountain-cap-3"></div>
                </div>
            </div>
            <div className="mountain-two">
                <div className="mountain-top">
                    <div className="mountain-cap-1"></div>
                    <div className="mountain-cap-2"></div>
                    <div className="mountain-cap-3"></div>
                </div>
            </div>
            <div className="mountain-three">
                <div className="mountain-top">
                    <div className="mountain-cap-1"></div>
                    <div className="mountain-cap-2"></div>
                    <div className="mountain-cap-3"></div>
                </div>
            </div>
        </div>
    </Box>)
}