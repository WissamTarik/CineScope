import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Axios/Axios";
import ErrorHandler from "../../Axios/ErrorHandler";

export const actGetUpcomingMovies=createAsyncThunk('movies/upcoming',async (_,thunkAPI)=>{
         const {rejectWithValue}=thunkAPI
    try {
          const {data}=await axios.get('/3/movie/upcoming')
    
    return data.results
    
    } catch (error) {
      
         return rejectWithValue(ErrorHandler(error))
    }
   
    
})