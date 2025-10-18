import React from "react";
import {removeTask} from "../../redux/taskSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Completed() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const completedTasks = tasks.filter((task) => task.completed);
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Completed Tasks</h2>
                <div className="space-y-3">
                    {completedTasks.length === 0 ? (
                        <p className="text-gray-500 italic">No completed tasks found.</p>
                    ) : (
                        completedTasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition duration-200"
                            >
                                <span className="text-gray-700 font-medium">
                                    {task.text}
                                </span>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => dispatch(removeTask(task.id))}
                                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
