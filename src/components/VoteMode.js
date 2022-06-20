import React from "react";
import { useNavigate } from "react-router-dom";
import Music from "./Music";
import Game from "./Game";

export default function VoteMode(props) {

    const songOne = props.one
    const songTwo = props.two
    const nav = useNavigate();
    
    const linkSongOne = () => {
        nav(`/results`)
        new props.funcOne()
    }
    const linkSongTwo = () => {
        nav(`/results`)
        new props.funcTwo()
    }

    return(
        <div className="themesong--bg">
            <div className="app--container">
                <h1 className="themesong--title" onClick={props.randomAudio}>ThemeSong</h1>
                <div className="music">
                    <Music
                        {...songOne}
                     />
                    <h2 className="vs">vs.</h2>
                    <Music
                        {...songTwo}
                     />
                </div>
                <Game
                    funcOne={linkSongOne}
                    funcTwo={linkSongTwo}
                />
            </div>
        </div>
    )
}