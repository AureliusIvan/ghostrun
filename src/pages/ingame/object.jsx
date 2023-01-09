import Level from "./Level";
import { getRandomInt } from "../utils/ramdom";
import { useState, useRef, useEffect } from "react";
import woodbox from "../../asset/image/box.jpg"
import { Box, Image } from "@chakra-ui/react";
import "./object.css";
import { Rocket } from "./obstacledesign/rocket";
import { MonsterA, MonsterB, MonsterC, MonsterD } from "./obstacledesign/monster";
import { IceCream, Meteor } from "./obstacledesign/meteor";
import { Burger, BurgerDevil } from "./obstacledesign/burger";

function Obstacle({ refobstacle }) {
    const [attr, Setattr] = useState({
        id: "0",
        transform: "",
        width: "50px",
        height: "50px",
        obj: 0,
        src: ""
    });

    // state
    const [objstate, Setobjstate] = useState(true);
    const [name, Setname] = useState("block");
    const elementtoremove = useRef(null);

    function onIterationend() {
        // set Delay
        const delay = getRandomInt(2000);
        // work on this
        Setobjstate(false);
        setTimeout(() => {
            // work on this
            Setobjstate(true);
        }, delay);
        const value = getRandomInt(9);
        // const value = 8;
        Setattr({
            id: Level[value].id,
            width: Level[value].width,
            height: Level[value].height,
            obj: Level[value].obj,
        })
        switch (value) {
            case 0:
                return Setname("block");
            case 1:
                return Setname("block");
            case 2:
                return Setname("block");
            case 3:
                return Setname("monsterb");
            case 4:
                return Setname("rocket");
            case 5:
                return Setname("meteor");
            case 6:
                return Setname("hyperrocket");
            case 7:
                return Setname("MonsterCMove");
            case 8:
                return Setname("burgerdevilmove");
            default:
                break;
        }
    }

    return (
        <Box
            ref={refobstacle}
            id={'obstacle'}
            className={name}
            width={attr.width}
            height={attr.height}
            objectFit='cover'
            overflow={'hidden'}
            animationPlayState={objstate ? "running" : "paused"}
            onAnimationIterationCapture={onIterationend}

        >
            <Box
                className="itemtoremove"
                ref={elementtoremove}
            >
                {(function () {
                    switch (attr.obj) {
                        case 0:
                            return <Burger />
                        case 1:
                            return <MonsterD />;
                        case 2:
                            return <MonsterA />;
                        case 3:
                            return <MonsterB />
                        case 4:
                            return <Rocket />;
                        case 5:
                            return <IceCream />;
                        case 6:
                            return <Rocket />;
                        case 7:
                            return <MonsterC />;
                        case 8:
                            return <BurgerDevil />
                        default:
                            return null;
                    }
                })()}
            </Box>
        </Box >
    );
};

export default Obstacle;