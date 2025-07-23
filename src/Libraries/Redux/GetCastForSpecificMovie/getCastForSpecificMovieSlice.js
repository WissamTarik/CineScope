import { createSlice } from "@reduxjs/toolkit";
import { actGetCastForSpecificMovie } from "./actGetCastForSpecificMovie";

 
const initialState={
    isLoading:"idle",
    errorMessage:null,
    cast:[]
}
export const getCastSlice=createSlice({
    name:"getCast",
    initialState,
    reducers:{
        cleanUpCastForAMovie:((state)=>{
            state.errorMessage=null
            state.movies=[]
        })
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetCastForSpecificMovie.pending,(state)=>{
            state.isLoading='pending'
            state.errorMessage=null
            console.log('pending');
            
        }),
        builder.addCase(actGetCastForSpecificMovie.fulfilled,(state,action)=>{
            state.isLoading='succeeded'
            state.cast=action.payload
            console.log('Succeeded');
            
        })
        builder.addCase(actGetCastForSpecificMovie.rejected,(state,action)=>{
            state.isLoading='rejected'
            state.errorMessage=action.payload.status_message
         
            
            console.log('Rejected');
            
        })
    }

})
export const {cleanUpCastForAMovie}=getCastSlice.actions
export const getCastReducers=getCastSlice.reducer