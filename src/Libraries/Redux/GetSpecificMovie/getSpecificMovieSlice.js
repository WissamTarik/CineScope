import { createSlice } from "@reduxjs/toolkit";
import { actGetSpecificMovie } from "./ActGetSpecificMovie";
import { actGetMovieLink } from "./actGetMovieLink";

const initialState={
   isLoading:"idle",
    errorMessage:null,
    movie:{},
    movieKey:null,
    watchMovieLoading:"idle",
    watchMovieErrorMessage:null
}
const getSpecificMovieSlice=createSlice({
    name:'movieDetails',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(actGetSpecificMovie.pending,(state)=>{
            state.isLoading='pending',
            state.errorMessage=null
        })
        builder.addCase(actGetSpecificMovie.fulfilled,(state,action)=>{
            state.isLoading='succeeded',
            state.movie=action.payload
            
        })
        builder.addCase(actGetSpecificMovie.rejected,(state,action)=>{
            state.isLoading='rejected',
            state.errorMessage=action.payload.status_message
            console.log('Movie details rejected');

        })
        builder.addCase(actGetMovieLink.pending,(state)=>{
            state.watchMovieLoading='pending',
            state.watchMovieErrorMessage=null
        })
        builder.addCase(actGetMovieLink.fulfilled,(state,action)=>{
            state.watchMovieLoading='succeeded',
         
            
            state.movieKey=action.payload.results.length>0?action.payload.results[0].key:null
        
            
            
        })
        builder.addCase(actGetMovieLink.rejected,(state,action)=>{
            state.watchMovieLoading='rejected',
            state.watchMovieErrorMessage=action.payload.status_message
            console.log('Movie link rejected');

        })
    }
})
export const getSpecificMovieReducer=getSpecificMovieSlice.reducer