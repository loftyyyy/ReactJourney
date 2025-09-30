import Board from  './Board.jsx';
import {useState} from "react";
function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquare) {
        setHistory(nextSquare);
        setXIsNext(!xIsNext);

    }

    function jumpTo(nextMove){

    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    const [squares, setSquares] = useState(Array(9).fill(null))

    // function handleBoardStateFromChild(board){
    //     setSquares(board)
    //     console.log(squares)
    // }

    return(
        <div className="game">
            <div className="game-board">
                {/*<Board sendBoard={handleBoardStateFromChild} />*/}
                {<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>}
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>

        </div>

    )

}

export default Game;