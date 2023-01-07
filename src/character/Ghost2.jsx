import { Box } from "@chakra-ui/react";
import "./Ghost2.css"

export function Ghost2(props) {
    return (<Box
        id="character"
        className={props.jump}
        onAnimationEnd={props.AnimationEnd}
    >
        <div
            className="ghost2ghost"
        >
            <div className="ghost2head">
                <div className="ghost2eye ghost2eye-left"></div>
                <div className="ghost2eye ghost2eye-right"></div>
                <div className="ghost2mouth">
                    <div className="ghost2tooth"></div>
                    <div className="ghost2tooth ghost2tooth-two"></div>
                    <div className="ghost2tooth ghost2tooth-three"></div>
                    <div className="ghost2tooth tooth-four"></div>
                    <div className="ghost2tooth ghost2tooth-bottom ghost2tooth-five"></div>
                    <div className="ghost2tooth ghost2tooth-bottom ghost2tooth-six"></div>
                    <div className="ghost2tooth ghost2tooth-bottom ghost2tooth-seven"></div>
                </div>
            </div>
            <div className="ghost2tail"></div>
            <div className="ghost2tail ghost2tail-two"></div>
            <div className="ghost2tail ghost2tail-three"></div>
            <div className="ghost2tail ghost2tail-four"></div>
            <div className="ghost2tail ghost2tail-five"></div>
        </div>

        {/* <div className="ghost2shadow"></div> */}
    </Box >);
}