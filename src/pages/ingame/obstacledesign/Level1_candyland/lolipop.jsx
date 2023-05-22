import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import "./lolipop.scss"

function Pop() {
    return (<>
        <div className="pop rotating">
            <div className="lip"></div>
            <div className="Lolipopeyes">
                <div className="Lolipopeye left">
                    <div className="Lolipopiris"></div>
                </div>
                <div className="Lolipopeye right">
                    <div className="Lolipopiris"></div>
                </div>
            </div>
            <div className="LolipopMouth">
                <div className="LolipopMouth">
                </div>
            </div>
        </div>
    </>)
}


export function Lolipop() {
    return (<Box className="LolipopMonster">
        <main>
            <div className="fadeIn">
                <div className="bounce">
                    <Pop />
                </div>
            </div>
        </main>
    </Box>);
}