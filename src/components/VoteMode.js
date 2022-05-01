import Music from "./Music";
import Game from "./Game";

export default function VoteMode(props) {

    const songOne = props.one
    const songTwo = props.two

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
                    funcOne={props.funcOne}
                    funcTwo={props.funcTwo}
                />
            </div>
        </div>
    )
}