import './board.css'
import Square from './square'
import {useState} from "react";

function Board(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }

    return (
        <div className="board-row">
            <Square count={count} handleClick={handleClick}/>
            <Square count={count} handleClick={handleClick}/>
            <Square count={count} handleClick={handleClick}/>
        </div>
    )
}

export default Board;