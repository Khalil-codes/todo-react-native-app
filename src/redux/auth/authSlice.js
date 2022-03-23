import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: "Khalil" },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state, action) => {
            state.user = null;
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
