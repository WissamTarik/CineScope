import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Axios/Axios";
import ErrorHandler from "../../Axios/ErrorHandler";

export const actGetMoviesOfAnActor=createAsyncThunk('actorDetails/getActorMovies',async (id,thunkAPI)=>{
         const {rejectWithValue}=thunkAPI
    try {
          const {data}=await axios.get(`/3/person/${id}//movie_credits`)
    console.log(' actor movies data',data);
    
    return data.cast

    
    } catch (error) {
      console.log('Axios error',error);
      
         return rejectWithValue(ErrorHandler(error))
    }
   
    
})