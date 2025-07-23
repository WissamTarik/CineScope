import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Axios/Axios";
import ErrorHandler from "../../Axios/ErrorHandler";

export const actGetActorDetails=createAsyncThunk('actorDetails',async (id,thunkAPI)=>{
         const {rejectWithValue}=thunkAPI
    try {
          const {data}=await axios.get(`/3/person/${id}`)
    
    return data

    
    } catch (error) {
      console.log('Axios error',error);
      
         return rejectWithValue(ErrorHandler(error))
    }
   
    
})