import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:'Auth',
    initialState:{
        email:null,
        id:null,
        token:null
    },
    reducers:{
        AuthUser(state,action){
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        }

    }

})
export const {AuthUser} = authSlice.actions;
export default authSlice.reducer;