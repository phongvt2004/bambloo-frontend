// import { createSlice } from "@reduxjs/toolkit/dist/createSlice"
import {createSlice} from "@reduxjs/toolkit/dist";
import { act } from "react-dom/test-utils";

export const reducers = createSlice({
    name:"userInfo",
    initialState : {
        email: "",
        userId: "",
        accessToken: "",
        refreshToken: "",
        role: "",
    } ,
    reducer:{
        updateUserInfo: (state, action) => {
            state.email = action.payload.email;
            state.userId = action.payload.userId;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.role = action.payload.role;
        }
    }
});
export const {updateUserInfo} = reducers.actions;
export default reducers.reducer;