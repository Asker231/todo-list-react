import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import todoSlice from "./todoSlice";


const store = configureStore({
    reducer:{
        todo:todoSlice,
        nav:navSlice,
    }
})

export default store;
