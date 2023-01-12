import "./pig.css"

export function PigMonster() {
    return (<>

        <div className="forest">
            <div className="pig">
                <div className="pig__body"></div>
                <div className="pig__tail"></div>
                <div className="pig__leg1"></div>
                <div className="pig__leg2"></div>
                <div className="pig__nose"></div>
                <div className="pig__head"></div>
                <div className="pig__ear"></div>
            </div>
        </div>
    </>)
}


export function FireNormal() {
    return (<>
        <div className="forest">
            <div className="fire">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="bunch1">
                <div></div>
                <div></div>
            </div>
            <div className="bunch2">
                <div></div>
                <div></div>
            </div>
        </div>
    </>)
}