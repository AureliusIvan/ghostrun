import { Box } from "@chakra-ui/react";
import "./lolipop.css"

export function Lolipop() {
    return (<Box>
        <main>
            <div class="fadeIn">
                <div class="bounce">
                    <div class="pop">
                        <div class="lip"></div>
                        <div class="lip2"></div>
                        <div class="shadow"></div>
                    </div>
                    <div class="stick"></div>
                </div>
            </div>
        </main>
    </Box>);
}