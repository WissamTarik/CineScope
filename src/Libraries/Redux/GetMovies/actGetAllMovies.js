import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Axios/Axios";
import ErrorHandler from "../../Axios/ErrorHandler";

export const actGetAllMovies=createAsyncThunk('movies',async (_,thunkAPI)=>{
         const {rejectWithValue}=thunkAPI
    try {
          const {data}=await axios.get('/3/discover/movie')
    
    return data.results
    
    } catch (error) {
      console.log('Axios error',error);
      
         return rejectWithValue(ErrorHandler(error))
    }
   
    
})