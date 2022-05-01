import React from "react";
import Music from "./Music";

export default function ResultsMode(props) {

    const results = props.results

    return(
        <div className="themesong--bg">
            <div className="app--container">
                <h1 className="themesong--title">ThemeSong</h1>
                <div className="music">
                    <Music  className="music--results"
                        {...results}    
                    />
                </div>
            </div>
        </div>
    )
}