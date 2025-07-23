import { createAsyncThunk } from "@reduxjs/toolkit";
import ErrorHandler from "../../Axios/ErrorHandler";
import axios from "../../Axios/Axios";

export const actGetSpecificMovie=createAsyncThunk('movieDetails',async (id,thunkApi)=>{
    const {rejectWithValue}=thunkApi
   
         try {
             const {data}=await axios.get(`/3/movie/${id}`)
          
             return data
             
         } catch (error) {
            console.log(error);
            
             return rejectWithValue(ErrorHandler(error))
         }
})