import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id:0
}

const slices = createSlice({
    name:'Store',
    initialState,
    reducers:{
        setId:(state,action)=>{
            state.id = action.payload
        }
    }
})

export const {setId} = slices.actions

export const StateReducer = slices.reducer