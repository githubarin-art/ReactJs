import React from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/taskSlice";
import {useNavigate} from "react-router-dom";
export default function Add() {
    const navigate = useNavigate();
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (input.trim() !== "") dispatch(addTask(input));
        setInput("");
        navigate("/");
    };
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                    <form onSubmit={onSubmitHandler} className="space-y-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="Enter a new task..."
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
