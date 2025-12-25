import Game from "./components/Game";
import HighScores from "./components/HighScores"

export default function PlayGame() {
    return(
        <div id="gameContainer">
            <Game></Game>
            <HighScores></HighScores>
        </div>
    );
}