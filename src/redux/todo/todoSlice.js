import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "./todoService";

export const getTodos = createAsyncThunk("todos/all", async () => {
    return todoService.fetchAllTodos();
});

export const createTodo = createAsyncThunk("todos/create", async (data) => {
    return todoService.createTodo(data);
});
export const completeTodo = createAsyncThunk("todo/complete", async (id) => {
    return todoService.completeTodo(id);
});
export const deleteTodo = createAsyncThunk("todo/delete", async (id) => {
    return todoService.deleteTodo(id);
});
const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.todos.unshift(action.payload);
            })
            .addCase(completeTodo.fulfilled, (state, action) => {
                state.todos = state.todos.map((todo) =>
                    todo._id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo,
                );
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter(
                    (todo) => todo._id !== action.payload,
                );
            });
    },
});
export default todoSlice.reducer;
