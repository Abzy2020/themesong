import React from "react";
import VoteMode from "./VoteMode";
import ResultsMode from "./ResultsMode";
import audioData from "./audioData";

export default function DetermineMode() {
    const today = new Date()
    const time = today.getHours()

    const [winner, setWinner] = React.useState('')
    const chooseOne = () => {
        setWinner(prevWinner => prevWinner = songOne)
    }
    const chooseTwo = () => {
        setWinner(prevWinner => prevWinner = songTwo)
    }

    const [songOne, setSongOne] = React.useState('');
    const [songTwo, setSongTwo] = React.useState('');

    const getRandomSongOne = () => {
        const music = audioData;
        const randomSongNumber = Math.floor(Math.random() * music.length);
        const randomSong = music.map(song => song);
        setSongOne(prevSongOne => prevSongOne = randomSong[randomSongNumber]); 
    }    
    const getRandomSongTwo = () => {
        const music = audioData;
        const randomSongNumber = Math.floor(Math.random() * music.length);
        const randomSong = music.map(song => song);
        setSongTwo(prevSongTwo => prevSongTwo = randomSong[randomSongNumber]);
    } 
    const chooseRandomSongs = () => {
        getRandomSongOne();
        getRandomSongTwo();
    }
    React.useEffect(function(){
        chooseRandomSongs()
    }, [])

    return(
        <div>
            { 5 < time && time < 25 ?
            <VoteMode 
                funcOne={chooseOne}
                funcTwo={chooseTwo}
                randomAudio={chooseRandomSongs}
                one={songOne}
                two={songTwo}
            />
            :
            <ResultsMode
                results={winner}
            />}
        </div>
    )
}