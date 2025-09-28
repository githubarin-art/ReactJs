import React, {useState} from "react";

function Card() {
    const [color, setColor] = useState("bg-white");
    const myColorsSet = new Map([
        ["bg-red-500", "#ef4444"],
        ["bg-green-500", "#22c55e"],
        ["bg-blue-500", "#3b82f6"],
        ["bg-yellow-500", "#eab308"],
    ]);
    const changeColor = (newColor) => {
        setColor(newColor);
    };
    const documentColorChanger = (color) => {
        document.body.style.backgroundColor = myColorsSet.get(color) || "white"; // this document.body.style variable only takes string as an input [in this context hexcode only]
        document.body.style.color = "#ffffff";
    };

    const myColors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];

    return (
        <div
            className={` flex flex-col items-center justify-center p-4 rounded shadow-md ${color}`}
        >
            <h2>Color Changer</h2>
            <button
                className="border-4 px-4 py-2 rounded-lg bg-blue-500 text-white"
                onClick={() => {
                    const newColor =
                        myColors[Math.floor(Math.random() * myColors.length)];
                    changeColor(newColor);
                    documentColorChanger(newColor);
                }}
            >
                Change Color
            </button>
        </div>
    );
}

export default Card;
