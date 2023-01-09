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
        <div class="MonsterCcontainer">
            <div class="MonsterCmonster">
                <div class="MonsterCball">
                    <div class="MonsterCbelly"></div>
                </div>
                <div class="MonsterCleft-arm"></div>
                <div class="MonsterCright-arm"></div>
                <div class="MonsterCleft-foot"></div>
                <div class="MonsterCright-foot"></div>
                <div class="MonsterCmiddle-eye eye">
                    <div class="MonsterCiris"></div>
                </div>
                <div class="MonsterCleft-eye eye">
                    <div class="MonsterCiris MonsterCiris-small"></div>
                </div>
                <div class="MonsterCright-eye MonsterCeye">
                    <div class="MonsterCiris MonsterCiris-small"></div>
                </div>
                <div class="MonsterCmouth">
                    <div class="MonsterCteeth"></div>
                    <div class="MonsterCtongue"></div>
                </div>
                <div class="MonsterCleft-ears">
                    <div class="MonsterClarge"></div>
                    <div class="MonsterCsmall"></div>
                </div>
                <div class="MonsterCright-ears">
                    <div class="MonsterClarge"></div>
                    <div class="MonsterCsmall"></div>
                </div>
            </div>
            <div class="MonsterCshadow"></div>
        </div>

    </>)
}


export function MonsterD() {
    return (<>
        <div class="MonsterCcontainer">
            <div class="MonsterCmonster">
                <div class="MonsterDball">
                    <div class="MonsterDbelly"></div>
                </div>
                <div class="MonsterDleft-arm"></div>
                <div class="MonsterDright-arm"></div>
                <div class="MonsterDleft-foot"></div>
                <div class="MonsterDright-foot"></div>
                <div class="MonsterDleft-eye eye">
                    <div class="MonsterDiris MonsterDiris-small"></div>
                </div>
                <div class="MonsterDright-eye MonsterCeye">
                    <div class="MonsterDiris MonsterDiris-small"></div>
                </div>
                <div class="MonsterCmouth">
                    <div class="MonsterCtongue"></div>
                </div>
            </div>
        </div>

    </>)
}