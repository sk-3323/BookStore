import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"signup",
    initialState:{
        _id:undefined,
        username:undefined,
        email:undefined,
        password:undefined
    },
    reducers: {
        initialUser : (state, action) => {
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
            console.log(action.payload);
        },
        logoutUser : (state) => {
            state._id = undefined;
            state.username = undefined;
            state.email = undefined;
        }
    }
})
export default userSlice
export const userAction = userSlice.actions;