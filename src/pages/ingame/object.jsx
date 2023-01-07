import Level from "./Level";
import { getRandomInt } from "../utils/ramdom";
import { useState } from "react";
import woodbox from "../../asset/image/box.jpg"
import { Box, Image } from "@chakra-ui/react";
import "./object.css";
import { Rocket } from "./obstacledesign/rocket";
import { MonsterA, MonsterB } from "./obstacledesign/monster";
import { IceCream, Meteor } from "./obstacledesign/meteor";
import { Burger, BurgerDevil } from "./obstacledesign/burger";

function Obstacle() {
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
    function onIterationend() {
        // set Delay
        const delay = getRandomInt(2000);
        // work on this
        Setobjstate(false);
        setTimeout(() => {
            // work on this
            Setobjstate(true);
        }, delay);
        const value = getRandomInt(7);
        // const value = 6;
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
                return Setname("burgerdevilmove");
            case 2:
                return Setname("monsterb");
            case 3:
                return Setname("block");
            case 4:
                return Setname("rocket");
            case 5:
                return Setname("meteor");
            case 6:
                return Setname("hyperrocket");
            default:
                break;
        }
    }

    return (
        <Box
            id={'obstacle'}
            className={name}
            width={attr.width}
            height={attr.height}
            objectFit='cover'
            overflow={'hidden'}
            transform="rotate(45deg)"
            animationPlayState={objstate ? "running" : "paused"}
            onanimationi
            onAnimationIterationCapture={onIterationend}

        >


            {(function () {
                switch (attr.obj) {
                    case 0:
                        return <Burger />
                    case 1:
                        return <BurgerDevil />
                    case 2:
                        return <MonsterB />
                    case 3:
                        return <MonsterA />;
                    case 4:
                        return <Rocket />;
                    case 5:
                        return <IceCream />;
                    case 6:
                        return <Rocket />;
                    default:
                        return null;
                }
            })()}

        </Box >
    );
};

export default Obstacle;