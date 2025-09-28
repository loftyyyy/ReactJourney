import Square from './components/Square.jsx'
import {useState} from "react";
function App() {
    const [move, setMove] = useState(null)

    function moveTo() {
        setMove("Y")
    }


    return(
        <Square value={move} moveTo={moveTo} />
    )
}

export default App;