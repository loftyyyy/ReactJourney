import React, {useState} from "react";

function MyButton() {
    function onClick() {
        setCount(count + 1);
    }

    const [count, setCount] = useState(0)

    return(
        <button onClick={onClick}>
            {count} times
        </button>
    )
}

export default MyButton;