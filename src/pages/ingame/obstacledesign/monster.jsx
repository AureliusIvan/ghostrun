import { Box } from "@chakra-ui/react"
import "./monster.css"

export function MonsterA() {
    return (
        <Box transform={"scale(0.3)"}
            position="relative"
        >
            <div class="little-dude">
                <div class="dude-body">
                    <span class="dudeface">
                        <span class="dudeeyes">
                            <span class="dudeeye dudeeye-left"></span>
                            <span class="dudeeye dudeeye-right"></span>
                        </span>
                        <span class="dudemouth"></span>
                    </span>
                </div>
                <div class="dudeears">
                    <span class="dudeear dudeear-left top"></span>
                    <span class="dudeear dudeear-left middle"></span>
                    <span class="dudeear dudeear-left bottom"></span>
                    <span class="dudeear dudeear-right top"></span>
                    <span class="dudeear dudeear-right middle"></span>
                    <span class="dudeear dudeear-right bottom"></span>
                </div>
                <div class="dudelegs">
                    <span class="dudeleg-left"></span>
                    <span class="dudeleg-right"></span>
                </div>
            </div>
        </Box>
    )
}



export function MonsterB() {
    return (<>
        <div class="monsterBmain">
            <div class="monsterBmonster">
                <div class="monsterBmonster__face">
                    <div class="monsterBmonster__eyes">
                        <div class="monsterBmonster__eye"></div>
                        <div class="monsterBmonster__eye"></div>
                    </div>
                    <div class="monsterBmonster__mouth">
                        <div class="monsterBmonster__top"></div>
                        <div class="monsterBmonster__bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}