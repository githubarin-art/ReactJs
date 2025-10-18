import React from "react";
import {Outlet} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {completedTaskToggle} from "../../redux/taskSlice";
export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tasks = useSelector((state) => state.tasks);
    const inCompletedTasks = tasks.filter((task) => !task.completed);
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <input
                        type="text"
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="Search tasks..."
                    />
                </div>

                <div className=" relative task_container bg-white rounded-lg shadow-lg p-6 min-h-[400px]">
                    <Outlet />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Tasks</h2>
                    <ul className="space-y-3">
                        {inCompletedTasks.length > 0 ? (
                            inCompletedTasks.map((task) => (
                                <li key={task.id}>
                                    <div className="relative text-2xl font-semibold bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-l-4 border-purple-500">
                                        {task.text}
                                        <button
                                            onClick={() => {
                                                dispatch(completedTaskToggle(task.id));
                                                navigate("/completed");
                                            }}
                                            className="absolute right-3 bottom-2.5 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                        >
                                            Complete?
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li>
                                <p className="text-lg text-gray-500 italic">
                                    No incomplete tasks found.
                                </p>
                            </li>
                        )}
                    </ul>
                    <button
                        onClick={() => navigate("/add")}
                        className="absolute bottom-2 right-1 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200"
                    >
                        AddTask
                    </button>
                </div>
            </div>
        </div>
    );
}
