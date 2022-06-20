import React from "react";

export default function Music(props) {
    return(
        <div className="music--stage">
            <div className="embeds--frame">
                <div className="embed--one">
                    <h4 className="song--title">{props.artist} - {props.songTitle}</h4>
                    <iframe
                        title="spotify-music"
                        className="song--one--display" 
                        src={props.embedUrl}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}