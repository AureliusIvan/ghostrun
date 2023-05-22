import Level from "./../Level";
import { getRandomInt } from "../../../utils/randomMath";
import {
    useState,
    // useRef,
    // useEffect,
    useContext
} from "react";
import {
    Box,
    Image
} from "@chakra-ui/react";
import "./object.scss";
import { AllContext } from "../../../Value/AllContext";
// Level 1 : CanndyLand
import { Lolipop } from "./Level1_candyland/lolipop";
import { IceCream } from "./Level1_candyland/meteor";
import {
    // Icecreamvelvet,
    // IcecreamthreeInOne1,
    // Icecreamchocolate,
    // IcecreamthreeInOne2,
    // IcecreamchocolateWithStuff1,
    Icecreamlemon,
    // Icecreamwatermelon,
    // IcecreamisThatPink,
    // IcecreamPINK,
    // IcecreamthreeInOne3,
    // IcecreamchocolateWithStuff2,
    // Icecreampoison
} from "./Level1_candyland/iceCreamrain";
import { PigMonster } from "./Level1_candyland/pig";
import { MonsterRabbit, KingRabbit } from "./Level1_candyland/rabbit";
// Level 2 : JunkFood Island
import { Burger, BurgerDevil } from "./Level2_JunkFood/burger";
// Level 3 : Monster Swamp
import { MonsterA, MonsterB, MonsterC, MonsterD } from "./Level3_MonsterSwamp/monster";
// Level 4 : The Forest
// Level 5 : Deep Sea
// Level 6 : The Mountain
// Level 7 : Military Camp
// import { Tank } from "./Level7_MilitaryCamp/tank";
// import { Rocket, H } from "./Level7_MilitaryCamp/rocket";
// Level 8 : Hell


// [ main function start here ] //
export default function Obstacle({ refobstacle }) {
    const [attr, Setattr] = useState({
        id: "0",
        width: "40px",
        height: "40px",
        obj: 0,
    });

    // state
    const { level, Setlevel } = useContext(AllContext);
    const [objstate, Setobjstate] = useState(true);
    const [name, Setname] = useState("block");
    const [value, Setvalue] = useState(0);
    const [delay, setdelay] = useState(0);
    function onIterationend() {
        // set Delay
        setdelay(getRandomInt(1, 2000));
        // work on this
        Setobjstate(false);
        setTimeout(() => {
            // work on this
            Setobjstate(true);
        }, delay);
        if (level === 1) {
            Setvalue(getRandomInt(0, 5));
        } else if (level === 2) {
            Setvalue(getRandomInt(6, 8));
        }
        else if (level === 3) {
            Setvalue(getRandomInt(8, 10));
        }
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
                return Setname("meteor");
            case 2:
                return Setname("block");
            case 3:
                return Setname("MonsterCMove");
            case 4:
                return Setname("block");
            case 5:
                return Setname("meteor");
            case 6:
                return Setname("block");
            case 7:
                return Setname("meteor");
            case 8:
                return Setname("MonsterCMove");
            case 9:
                return Setname("MonsterCMove");
            default:
                break;
        }

    }

    // Return here!
    return (
        <Box
            ref={refobstacle}
            id={'obstacle'}
            className={name}
            width={attr.width}
            height={attr.height}
            objectFit='cover'
            overflow={'hidden'}
            animationplaystate={objstate ? "running" : "paused"}
            onAnimationIterationCapture={onIterationend}
        >
            <Box>
                {(function () {
                    switch (attr.obj) {
                        case 0:
                            return <Lolipop />
                        case 1:
                            return <IceCream />;
                        case 2:
                            return <PigMonster />;
                        case 3:
                            return <MonsterRabbit />
                        case 4:
                            return <KingRabbit />;
                        case 5:
                            return <Icecreamlemon />;
                        case 6:
                            return <Burger />;
                        case 7:
                            return <BurgerDevil />;
                        case 8:
                            return <MonsterC />
                        case 9:
                            return <MonsterC />;
                        case 10:
                            return <MonsterC />;
                        default:
                            return null;
                    }
                })()}
            </Box>
        </Box >
    );
};