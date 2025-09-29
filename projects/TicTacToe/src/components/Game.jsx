import Board from  './Board.jsx';
import {useState} from "react";
function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleBoardStateFromChild(board){
        setSquares(board)
        console.log(squares)
    }

    return(
        <div>
            <Board sendBoard={handleBoardStateFromChild} />
        </div>
    )

}

export default Game;