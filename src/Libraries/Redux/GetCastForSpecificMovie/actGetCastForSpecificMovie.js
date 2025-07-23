import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Axios/Axios";
import ErrorHandler from "../../Axios/ErrorHandler";

export const actGetCastForSpecificMovie=createAsyncThunk('getCastForAMovie',async (movieId,thunkAPI)=>{
         const {rejectWithValue}=thunkAPI
    try {
          const {data}=await axios.get(`/3/movie/${movieId}/credits`)
    
          console.log("Up specific movie cast",data.cast.slice(0,5));
    return data.cast.slice(0,5)
    
    } catch (error) {
      console.log('Axios error',error);
      
         return rejectWithValue(ErrorHandler(error))
    }
   
    
})