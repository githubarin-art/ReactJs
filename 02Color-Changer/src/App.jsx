import {useState} from "react";
import "./App.css";
import Card from "./Components/Card.jsx";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-3xl font-bold underline bg-white-500">Color-Changer</h1>
        </>
    );
}

export default App;
