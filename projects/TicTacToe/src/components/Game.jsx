import Board from  './Board.jsx';
import {useState} from "react";
function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);

    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleBoardStateFromChild(board){
        setSquares(board)
        console.log(squares)
    }

    return(
        <div className="game">
            <div className="game-board">
                <Board sendBoard={handleBoardStateFromChild} />
            </div>
            <div className="game-info">
                <ol>{}</ol>
            </div>

        </div>

    )

}

export default Game;