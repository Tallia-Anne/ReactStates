import "./index.css";
import { useState } from "react";

const Converters = () => {
    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");

    console.log("input", input);
    return (
        <div className="convertersContainer">
            <h1>EXERCICE 1</h1>
            Tapez la valeur en euros
            <input
                type="text"
                value={input}
                onChange={(event) => {
                    setInput(event.target.value);
                }}
                placeholder="entrez un nombre en euros"
            />
            La valeur en dollars est
            <div>{input * 1.2}</div>
            <hr />
            <h1>EXERCICE 2</h1>
            Valeur en Euros
            <input
                type="number"
                value={input2}
                onChange={(event) => {
                    setInput2(event.target.value);
                    setInput3(event.target.value * 1.2);
                }}
                placeholder="entrez un nombre en EUROS"
            />
            Valeur en dollars
            <input
                type="number"
                value={input3}
                onChange={(event) => {
                    setInput3(event.target.value);
                    setInput2(event.target.value / 1.2);
                }}
                placeholder="entrez un nombre en DOLLARS"
            />
        </div>
    );
};

export default Converters;