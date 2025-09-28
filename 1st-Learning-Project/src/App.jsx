import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1);
        if (counter >= 20) {
            alert("Counter cannot exceed 20");
            return setCounter(20);
        }
    };

    const removeValue = () => {
        setCounter(counter - 1);
        if (counter <= 0) {
            alert("Counter cannot be less than 0");
            return setCounter(0);
        }
    };

    return (
        <>
            <h1>hello</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={addValue}>Add value</button>
            <button onClick={removeValue}>Remove value</button>
            <p>Count: {counter}</p>
        </>
    );
}
export default App;
