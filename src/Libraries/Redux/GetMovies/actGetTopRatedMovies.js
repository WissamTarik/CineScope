import { createAsyncThunk } from "@reduxjs/toolkit";
import ErrorHandler from "../../Axios/ErrorHandler";
import axios from "../../Axios/Axios";
export const actGetTopRatedMovies=createAsyncThunk('movies/topRatedMovies',async (id,thunkApi)=>{
    const {rejectWithValue}=thunkApi
         try {
             const {data}=await axios.get(`/3/movie/top_rated`)
             console.log('movie top rated data',data);
             return data.results
             
         } catch (error) {
            console.log(error);
            
             return rejectWithValue(ErrorHandler(error))
         }
})