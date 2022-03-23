import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            title: "Task 1",
            completed: true,
        },
        {
            id: 2,
            title: "Task 2",
            completed: false,
        },
        {
            id: 3,
            title: "Task 3",
            completed: false,
        },
        {
            id: 4,
            title: "Task 4",
            completed: true,
        },
    ],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: state.todos.length + 1,
                title: action.payload,
                completed: false,
            });
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            );
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload,
            );
        },
    },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
