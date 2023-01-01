import "./ghostforstart.css"

function Ghostforstart(props) {

    return (<>
        <div
            className="wrapper1"
        >

            <div
                class="head1"
                // id="character1"
                className={props.jump}
                onAnimationEnd={props.AnimationEnd}
            >
                <div class="face1">
                    <div class="eye1-shadow1" id="left1">
                        <div class="eye1"></div>
                    </div>
                    <div class="eye1-shadow1" id="right1">
                        <div class="eye1"></div>
                    </div>
                    <div class="mouth2"></div>
                    <div class="shadow1-wrapper1">
                        <div class="shadow1"></div>
                    </div>
                    <svg className="foot1" viewBox="0 0 800 600">
                        <path d='M 0 350 Q 50 550 150 350 Q 200 250 250 350 Q 300 450 350 350 Q 400 250 450 350 Q 500 450 550 350 Q 600 250 650 350 Q 750 550 800 350 L 800 0 L 0 0 L 0 350 ' stroke-width='10' /></svg>
                </div>
            </div>
        </div>
    </>);
}


export default Ghostforstart;