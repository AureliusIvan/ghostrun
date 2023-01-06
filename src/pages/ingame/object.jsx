import Level from "./Level";
import { getRandomInt } from "../utils/ramdom";
import { useState } from "react";
import woodbox from "../../asset/image/box.jpg"
import { Box, Image } from "@chakra-ui/react";
import "./object.css";
import { Rocket } from "./obstacledesign/rocket";
import { MonsterA, MonsterB } from "./obstacledesign/monster";

function Obstacle() {
    const [attr, Setattr] = useState({
        id: "1",
        transform: "",
        width: "20px",
        height: "20px",
        obj: 1,
        src: ""
    });

    // state
    const [objstate, Setobjstate] = useState(true);
    const [name, Setname] = useState("block");
    function onIterationend() {
        // set Delay
        const delay = getRandomInt(2000);
        // work on this
        Setobjstate(false);
        setTimeout(() => {
            // work on this
            Setobjstate(true);
        }, delay);
        const value = getRandomInt(5);
        // const value = 2;
        Setattr({
            id: Level[value].id,
            transform: Level[value].transform,
            width: Level[value].width,
            height: Level[value].height,
            obj: Level[value].obj,
            borderTopRadius: Level[value].borderTopRadius,
            src: ""
        })
        switch (value) {
            case 0:
                return Setname("block");
            case 1:
                return Setname("block");
            case 2:
                return Setname("monsterb");
            case 3:
                return Setname("block");
            case 4:
                return Setname("rocket")
            default:
                break;
        }
        console.log(value);
    }

    return (
        <Box
            id={'obstacle'}
            className={name}
            width={attr.width}
            height={attr.height}
            objectFit='cover'
            overflow={'hidden'}
            animationPlayState={objstate ? "running" : "paused"}
            onAnimationIterationCapture={() => {
                onIterationend();
            }
            }
        >

            {/* <Image rel="preload" scale={1.2} src={woodbox} /> */}
            {(function(){
                switch (attr.obj) {
                    case 0:
                        return <Image rel="preload" scale={1.2} src={woodbox} />;
                    case 1:
                        return <Image rel="preload" scale={1.2} src={woodbox} />;
                    case 2:
                        return <MonsterB/>
                        // return <Image rel="preload" scale={1.2} src={woodbox} />;
                    case 3:
                        return <MonsterA/>;
                    case 4:
                        return <Rocket />;
                    default:
                        return null;
                }
            })()}
            
        </Box >
    );
};

export default Obstacle;