import './board.css'
import {useState} from "react";

function Square(props){
    const [move, setMove] = useState(null)

    function handleClick(){
        if(props.count %2 === 0 ){
            setMove("X")
        }else{
            setMove("O")
        }
    }

    return(
        <button className="square" onClick={handleClick}>{move}</button>
    )
}

export default Square;
