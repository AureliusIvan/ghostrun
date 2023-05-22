import React from 'react'
import './GhostTrail.scss'

function GhostTrail() {
    return (<>
        <div className="GhostTrail">
            <div className="egg">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="stars"><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span>
        </div>
    </>
    )
}

export default GhostTrail