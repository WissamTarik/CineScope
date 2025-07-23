import { createSlice } from "@reduxjs/toolkit";
import { actGetActorDetails } from "./actGetActorDetails";
import { actGetMoviesOfAnActor } from "./actGetMoviesOfAnActor";

 
const initialState={
    isLoading:"idle",
    errorMessage:null,
    actor:null,
    movies:[]
}
export const actorDetailsSlice=createSlice({
    name:"actorDetails",
    initialState,
    reducers:{
        cleanUpActorDetails:((state)=>{
            state.errorMessage=null
            state.movies=[]
        })
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetActorDetails.pending,(state)=>{
            state.isLoading='pending'
            state.errorMessage=null
            console.log('pending');
            
        }),
        builder.addCase(actGetActorDetails.fulfilled,(state,action)=>{
            state.isLoading='succeeded'
            state.actor=action.payload
            console.log('Succeeded');
            
        })
        builder.addCase(actGetActorDetails.rejected,(state,action)=>{
            state.isLoading='rejected'
            state.errorMessage=action.payload.status_message
         
            
            console.log('Rejected');
            
        })
     
        builder.addCase(actGetMoviesOfAnActor.pending,(state)=>{
            state.isLoading='pending'
            state.errorMessage=null
            console.log('pending');
            
        }),
        builder.addCase(actGetMoviesOfAnActor.fulfilled,(state,action)=>{
            state.isLoading='succeeded'
            state.movies=action.payload
            console.log('Succeeded');
            
        })
        builder.addCase(actGetMoviesOfAnActor.rejected,(state,action)=>{
            state.isLoading='rejected'
            state.errorMessage=action.payload.status_message
         
            
            console.log('Rejected');
            
        })
     
    
     
    
    }

})
export const {cleanUpActorDetails}=actorDetailsSlice.actions
export const actorDetailsReducers=actorDetailsSlice.reducer