import React from "react";

export default function Game(props) {

    return(
        <div className="voting--panel">
            <h2 className="vote--title">Vote Here!</h2>
            <div className="voting--btns">
                <button className="vote--one" onClick={props.funcOne} >One</button>
                <button className="vote--two" onClick={props.funcTwo} >Two</button>
            </div>
        </div>
    )
}