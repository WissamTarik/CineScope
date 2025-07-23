import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Axios/Axios";
import ErrorHandler from "../../Axios/ErrorHandler";

export const actSearchForAMovie=createAsyncThunk('searchForAMovie',async (searchValue,thunkAPI)=>{
         const {rejectWithValue}=thunkAPI
    try {
          const {data}=await axios.get(`/3/search/movie?query=${searchValue}`)
    
             
    return data.results

    
    } catch (error) {
      console.log('Axios error',error);
      
         return rejectWithValue(ErrorHandler(error))
    }
   
    
})