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

export function MonsterC() {
    return (<>
        <div className="MonsterCcontainer">
            <div className="MonsterCmonster">
                <div className="MonsterCball">
                    <div className="MonsterCbelly"></div>
                </div>
                <div className="MonsterCleft-arm"></div>
                <div className="MonsterCright-arm"></div>
                <div className="MonsterCleft-foot"></div>
                <div className="MonsterCright-foot"></div>
                <div className="MonsterCmiddle-eye MonsterCeye">
                    <div className="MonsterCiris"></div>
                </div>
                <div className="MonsterCleft-eye MonsterCeye">
                    <div className="MonsterCiris MonsterCiris-small"></div>
                </div>
                <div className="MonsterCright-eye MonsterCeye">
                    <div className="MonsterCiris MonsterCiris-small"></div>
                </div>
                <div className="MonsterCmouth">
                    <div className="MonsterCteeth"></div>
                    <div className="MonsterCtongue"></div>
                </div>
                <div className="MonsterCleft-ears">
                    <div className="MonsterClarge"></div>
                    <div className="MonsterCsmall"></div>
                </div>
                <div className="MonsterCright-ears">
                    <div className="MonsterClarge"></div>
                    <div className="MonsterCsmall"></div>
                </div>
            </div>
            <div className="MonsterCshadow"></div>
        </div>

    </>)
}


export function MonsterD() {
    return (<>
        <div className="MonsterCcontainer">
            <div className="MonsterCmonster">
                <div className="MonsterDball">
                    <div className="MonsterDbelly"></div>
                </div>
                <div className="MonsterDleft-arm"></div>
                <div className="MonsterDright-arm"></div>
                <div className="MonsterDleft-foot"></div>
                <div className="MonsterDright-foot"></div>
                <div className="MonsterDleft-eye MonsterDeye">
                    <div className="MonsterDiris MonsterDiris-small"></div>
                </div>
                <div className="MonsterDright-eye MonsterCeye">
                    <div className="MonsterDiris MonsterDiris-small"></div>
                </div>
                <div className="MonsterCmouth">
                    <div className="MonsterCtongue"></div>
                </div>
            </div>
        </div>

    </>)
}