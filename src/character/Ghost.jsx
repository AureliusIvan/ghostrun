import "./Ghost.css"
import { useRef } from "react";
import { Box } from "@chakra-ui/react";


export function Ghost({ refghost, jump, AnimationEnd, frown }) {
    return (<>
        <Box className="wrapper">
            <div
                ref={refghost}
                id="character"
                className={jump}
                onAnimationEnd={AnimationEnd}
            >
                <div className="ghostbody">
                    <div className="face">
                        <div className="eye-shadow" id="left">
                            <div className="eye"></div>
                        </div>
                        <div className="eye-shadow" id="right">
                            <div className="eye"></div>
                        </div>
                        {frown ? <div id="frown">
                            <div id="frownchild"></div>
                        </div> : <div className="mouth"></div>}
                        <div className="shadow-wrapper">
                            <div className="shadow"></div>
                        </div>
                        <svg className="foot" viewBox="0 0 800 600">
                            <path d='M 0 350 Q 50 550 150 350 Q 200 250 250 350 Q 300 450 350 350 Q 400 250 450 350 Q 500 450 550 350 Q 600 250 650 350 Q 750 550 800 350 L 800 0 L 0 0 L 0 350 ' strokeWidth='10' /></svg>
                    </div>
                </div>
            </div>
        </Box>
    </>);
}


