import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
   name:"todo",
   initialState:{
    arr:[]
   },
   reducers:{
    addItem(state,action){
         state.arr.push(action.payload)
    },removeItem(state,action){
         state.arr.filter(el => el.id !== action.payload.id);
    }
   }
});

export const {addItem,removeItem} = todoSlice.actions;
export default todoSlice.reducer;
