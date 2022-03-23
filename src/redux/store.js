import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./auth/authSlice";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        todos: todoReducer,
    },
});

export const useAuth = () => useSelector((state) => state.auth);
export const useTodos = () => useSelector((state) => state.todos);
