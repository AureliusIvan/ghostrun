import Level from "./Level";
import { getRandomInt } from "../utils/ramdom";
import { useState } from "react";
import woodbox from "../../asset/image/box.jpg"
import { Box, Image } from "@chakra-ui/react";
import "./object.css";

function Obstacle() {
    const [attr, Setattr] = useState({
        transform: "",
        width: "40px",
        height: "40px",
        src: woodbox
    });

    // state
    const [objstate, Setobjstate] = useState(true);
    function onIterationend() {
        // set Delay
        const delay = getRandomInt(1000);
        // work on this
        Setobjstate(false);
        setTimeout(() => {
            // work on this
        Setobjstate(true);
        }, delay);
        const value = delay * 4;
        Setattr({
            transform: Level[value].transform,
            width: Level[value].width,
            height: Level[value].height
        })

    }
    return (
        <Box
            id={'block'}
            className="obstacle"
            width={attr.width}
            height={attr.height}
            objectFit='cover'
            overflow={'hidden'}
            animationPlayState={objstate? "running" : "paused"}
            transform={attr.transform}
            onAnimationIterationCapture={() => {
                onIterationend();
            }}
        >
            <Image rel="preload" scale={1.2} src={woodbox} />
        </Box>
    );
};

export default Obstacle;