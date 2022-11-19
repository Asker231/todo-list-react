import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import navSlice from "./navSlice";
import todoSlice from "./todoSlice";


const store = configureStore({
    reducer:{
        todo:todoSlice,
        nav:navSlice,
        auth:authSlice
    }
})

export default store;
