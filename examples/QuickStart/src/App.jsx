import React, {useState} from "react";

import MyButton from "./components/MyButton.jsx";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function MyApp() {
    const product = products.map(p =>
    <li>{p.title}</li>);
    const [count, setCount] = useState(0)
    function onClick() {
        setCount(count + 1);
    }
    return(
        <div>
            <h1>Hello, I am learning React, this is my first component</h1>
            <MyButton count={count} onClick={onClick}/>
            <MyButton count={count} onClick={onClick}/>
            <ul>
                {product}
            </ul>
        </div>
    )
}

export default MyApp;
