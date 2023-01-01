import "./Ghost.css"

function Ghost(props) {

    return (<>
        <div
            className="wrapper"
        >

            <div
                class="head"
                id="character"
                className={props.jump}
                onAnimationEnd={props.AnimationEnd}
            >
                <div class="face">
                    <div class="eye-shadow" id="left">
                        <div class="eye"></div>
                    </div>

                    <div class="eye-shadow" id="right">
                        <div class="eye"></div>
                    </div>
                    {props.frown ? <div id="frown">
                        <div id="frownchild"></div>
                    </div> : <div class="mouth"></div>}
                    <div class="shadow-wrapper">
                        <div class="shadow"></div>
                    </div>
                    <svg className="foot" viewBox="0 0 800 600">
                        <path d='M 0 350 Q 50 550 150 350 Q 200 250 250 350 Q 300 450 350 350 Q 400 250 450 350 Q 500 450 550 350 Q 600 250 650 350 Q 750 550 800 350 L 800 0 L 0 0 L 0 350 ' stroke-width='10' /></svg>
                </div>
            </div>
        </div>
    </>);
}


export default Ghost;