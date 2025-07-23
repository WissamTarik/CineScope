import { createSlice } from "@reduxjs/toolkit";
import { actGetSpecificGenresOfMovies } from "./actGetSpecificGenresOfMovies";

 
const initialState={
    isLoading:"idle",
    errorMessage:null,
    movies:[]
}
export const getSpecificGenresOfMoviesSlice=createSlice({
    name:"genreOfMovies",
    initialState,
    reducers:{
        cleanUpGetSpecificGenresOfMovie:((state)=>{
            state.errorMessage=null
            state.movies=[]
        })
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetSpecificGenresOfMovies.pending,(state)=>{
            state.isLoading='pending'
            state.errorMessage=null
            console.log('pending');
            
        }),
        builder.addCase(actGetSpecificGenresOfMovies.fulfilled,(state,action)=>{
            state.isLoading='succeeded'
            state.movies=action.payload
            
            console.log('Succeeded');
            
        })
        builder.addCase(actGetSpecificGenresOfMovies.rejected,(state,action)=>{
            state.isLoading='rejected'
            state.errorMessage=action.payload.status_message
         
            
            console.log('Rejected');
            
        })
     
   
     
    
     
    
    }

})
export const {cleanUpGetSpecificGenresOfMovie}=getSpecificGenresOfMoviesSlice.actions
export const getSpecificGenresOfMoviesReducer=getSpecificGenresOfMoviesSlice.reducer