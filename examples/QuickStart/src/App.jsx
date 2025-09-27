import React from "react";
import MyButton from "./components/MyButton.jsx";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function MyApp() {
    const product = products.map(p =>
    <li>{p.title}</li>);
    return(
        <div>
            <h1>Hello, I am learning React, this is my first component</h1>
            <MyButton />
            <ul>
                {product}
            </ul>
        </div>
    )
}

export default MyApp;
