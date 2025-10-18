import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Add from "./pages/Add/Add.jsx";
import Completed from "./pages/Completed/Completed.jsx";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
    const tasks = useSelector((state) => state.tasks);
    useEffect(() => {
        console.log("Saving tasks to localStorage", tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="add" element={<Add />} />
                <Route path="completed" element={<Completed />} />
            </Route>
        </Routes>
    );
}

export default App;
