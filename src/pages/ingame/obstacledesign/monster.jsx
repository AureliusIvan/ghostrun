import { Box } from "@chakra-ui/react"
import "./monster.css"

export function MonsterA() {
    return (
        <Box transform={"scale(0.3)"}
            position="relative"
        >
            <div className="little-dude">
                <div className="dude-body">
                    <span className="dudeface">
                        <span className="dudeeyes">
                            <span className="dudeeye dudeeye-left"></span>
                            <span className="dudeeye dudeeye-right"></span>
                        </span>
                        <span className="dudemouth"></span>
                    </span>
                </div>
                <div className="dudeears">
                    <span className="dudeear dudeear-left top"></span>
                    <span className="dudeear dudeear-left middle"></span>
                    <span className="dudeear dudeear-left bottom"></span>
                    <span className="dudeear dudeear-right top"></span>
                    <span className="dudeear dudeear-right middle"></span>
                    <span className="dudeear dudeear-right bottom"></span>
                </div>
                <div className="dudelegs">
                    <span className="dudeleg-left"></span>
                    <span className="dudeleg-right"></span>
                </div>
            </div>
        </Box>
    )
}



export function MonsterB() {
    return (<>
        <div className="monsterBmain">
            <div className="monsterBmonster">
                <div className="monsterBmonster__face">
                    <div className="monsterBmonster__eyes">
                        <div className="monsterBmonster__eye"></div>
                        <div className="monsterBmonster__eye"></div>
                    </div>
                    <div className="monsterBmonster__mouth">
                        <div className="monsterBmonster__top"></div>
                        <div className="monsterBmonster__bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}