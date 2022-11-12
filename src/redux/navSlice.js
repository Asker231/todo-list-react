import { createSlice } from "@reduxjs/toolkit";


const navSlice = createSlice({
    name:'nav',
    initialState:{
        arr:[]
    },
    reducers:{
        addNav(state,action){
            state.arr.push(action.payload)
        }
    }
})


export const {addNav} = navSlice.actions;
export default navSlice.reducer;
