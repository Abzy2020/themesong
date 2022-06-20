import React from "react";

export default function WinnerInfo(props) {

    const [lyrics, setLyrics] = React.useState('No lyrics available')

    fetch(`/results/${props.artist}/${props.songTitle}`)
        .then(res => res.text())
        .then(data => setLyrics(data))

    return(
        <div className="lyrics--container">
            <h4>Sample Lyrics:</h4>
            <p className="lyric--text">{lyrics}</p>
        </div>
    )
}