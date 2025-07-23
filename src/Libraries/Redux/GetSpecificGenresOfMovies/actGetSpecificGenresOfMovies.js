import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Axios/Axios";
import ErrorHandler from "../../Axios/ErrorHandler";

export let genreName;
export const actGetSpecificGenresOfMovies=createAsyncThunk('genreOfMovies',async (id,thunkAPI)=>{
         const {rejectWithValue}=thunkAPI
    try {
          const {data}=await axios.get(`3/discover/movie?with_genres=${id}`)             
          return data.results

    
    } catch (error) {
      console.log('Axios error',error);
      
         return rejectWithValue(ErrorHandler(error))
    }
   
    
})