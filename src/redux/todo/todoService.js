import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

const todoService = {
    fetchAllTodos: async () => {
        const response = await API.get("/todos");
        return response.data.data.todos;
    },
    createTodo: async (text) => {
        const response = await API.post("/todos", { text });
        return response.data.data.todo;
    },
    completeTodo: async (id) => {
        const response = await API.patch(`/todos/${id}`);
        return response.data.data.id;
    },
    deleteTodo: async (id) => {
        const response = await API.delete(`/todos/${id}`);
        return response.data.data.id;
    },
};

export default todoService;
