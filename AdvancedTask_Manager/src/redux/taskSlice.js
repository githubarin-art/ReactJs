import {createSlice, nanoid} from "@reduxjs/toolkit";
const initialTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

const initialState = {
    tasks: initialTasks.length
        ? initialTasks
        : [{id: 1, text: "Hello", completed: false}],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            };
            state.tasks.push(task);
        },

        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) state.tasks[index] = action.payload;
        },

        completedTaskToggle: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
    },
});

export default taskSlice.reducer;
export const {addTask, removeTask, updateTask, completedTaskToggle} = taskSlice.actions;
