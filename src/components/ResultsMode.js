import React from "react";
import { useNavigate } from "react-router-dom";
import Music from "./Music";
import WinnerInfo from "./WinnerInfo";

export default function ResultsMode(props) {

    const results = props.winner //results passed down from votemode
    const nav = useNavigate();

    const linkBack = () => {
        nav("/");
    }

    return(
        <div className="themesong--bg">
            <h1 className="themesong--title">ThemeSong</h1>
            <div className="app--container--results">
                <div className="music--winner">
                    <Music  className="music--results"
                        {...results}    
                    />
                    <WinnerInfo
                        {...results}
                    />
                </div>
            </div>
            <div className="back--btn--container">
                <button 
                    className="back--btn"
                    onClick={linkBack}
                >
                    Go back
                </button>
            </div>
       </div>
    )
}