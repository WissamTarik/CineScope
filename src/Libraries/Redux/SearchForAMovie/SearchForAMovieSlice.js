import { createSlice } from "@reduxjs/toolkit";
import { actSearchForAMovie } from "./ActSearchForAMovie";

const initialState={
   isLoading:"idle",
    errorMessage:null,
    movies:[]
}
const searchForAMovieSlice=createSlice({
    name:'searchForAMovie',
    initialState,
    reducers:{
   cleanUpMovies:(state)=>{
    state.movies=[]
    state.isLoading='idle'
    state.errorMessage=null
   }
    },
    extraReducers:(builder)=>{
        builder.addCase(actSearchForAMovie.pending,(state)=>{
            state.isLoading='pending',
            state.errorMessage=null
        })
        builder.addCase(actSearchForAMovie.fulfilled,(state,action)=>{
            state.isLoading='succeeded',
            state.movies=action.payload
            
        })
        builder.addCase(actSearchForAMovie.rejected,(state,action)=>{
            state.isLoading='rejected',
            state.errorMessage=action.payload.status_message
            console.log('actSearchForAMovie rejected');

        })
    }
})
export const searchForAMovieReducer=searchForAMovieSlice.reducer