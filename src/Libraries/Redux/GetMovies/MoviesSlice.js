import { createSlice } from "@reduxjs/toolkit";
import { actGetAllMovies } from "./actGetAllMovies";
import { actGetRelatedMovies } from "./actGetRelatedMovies";
import { actGetTopRatedMovies } from "./actGetTopRatedMovies";
import { actGetUpcomingMovies } from "./actGetUpcomingMovies";
 
const initialState={
    isLoading:"idle",
    errorMessage:null,
    movies:[]
}
function handlePending(state){
   state.isLoading='pending'
   state.errorMessage=null
}
function handleFullfilled(state,action){
   state.isLoading='succeeded'
   state.movies=action.payload
}
function handleRejected(state,action){
   state.isLoading='rejected'
   state.errorMessage=action.payload.status_message||"Something went wrong"
}
export const moviesSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        cleanUpMovies:((state)=>{
            state.errorMessage=null
            state.movies=[]
        })
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetAllMovies.pending,handlePending ),
        builder.addCase(actGetAllMovies.fulfilled,handleFullfilled)
        builder.addCase(actGetAllMovies.rejected,handleRejected)
        builder.addCase(actGetRelatedMovies.pending,handlePending ),
        builder.addCase(actGetRelatedMovies.fulfilled,handleFullfilled)
        builder.addCase(actGetRelatedMovies.rejected,handleRejected)
        builder.addCase(actGetTopRatedMovies.pending,handlePending ),
        builder.addCase(actGetTopRatedMovies.fulfilled,handleFullfilled)
        builder.addCase(actGetTopRatedMovies.rejected,handleRejected)
        builder.addCase(actGetUpcomingMovies.pending,handlePending ),
        builder.addCase(actGetUpcomingMovies.fulfilled,handleFullfilled)
        builder.addCase(actGetUpcomingMovies.rejected,handleRejected)
    }

})
export const {cleanUpMovies}=moviesSlice.actions
export const moviesReducers=moviesSlice.reducer