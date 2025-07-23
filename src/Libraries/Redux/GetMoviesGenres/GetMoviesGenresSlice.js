import { createSlice } from "@reduxjs/toolkit";
import { actGetMoviesGenre } from "./ActGetMoviesGenres";

 
const initialState={
    isLoading:"idle",
    errorMessage:null,
    genres:[]
}
export const getMoviesGenresSlice=createSlice({
    name:"moviesGenres",
    initialState,
    reducers:{
        cleanUpGetMoviesGenres:((state)=>{
            state.errorMessage=null
            state.genres=[]
        })
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetMoviesGenre.pending,(state)=>{
            state.isLoading='pending'
            state.errorMessage=null
            console.log('pending');
            
        }),
        builder.addCase(actGetMoviesGenre.fulfilled,(state,action)=>{
            state.isLoading='succeeded'
            state.genres=action.payload
            console.log('Succeeded');
            
        })
        builder.addCase(actGetMoviesGenre.rejected,(state,action)=>{
            state.isLoading='rejected'
            state.errorMessage=action.payload.status_message
         
            
            console.log('Rejected');
            
        })
     
   
     
    
     
    
    }

})
export const {cleanUpAMoviesGenres}=getMoviesGenresSlice.actions
export const getMoviesGenresReducer=getMoviesGenresSlice.reducer