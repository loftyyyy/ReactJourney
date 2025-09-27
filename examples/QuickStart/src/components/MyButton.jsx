import React from "react";

function MyButton({count, onClick}) {

    return(
        <button onClick={onClick}>
            {count} times
        </button>
    )
}

export default MyButton;