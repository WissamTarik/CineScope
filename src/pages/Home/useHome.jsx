import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actGetAllMovies } from '../../Libraries/Redux/GetMovies/actGetAllMovies'
import { cleanUpMovies } from '../../Libraries/Redux/GetMovies/MoviesSlice'

const useHome = () => {
        const dispatch=useDispatch()
     const {movies,isLoading,errorMessage}=useSelector((store)=>store.moviesReducers)
  useEffect(()=>{
   dispatch(actGetAllMovies())
     return ()=>{
      dispatch(cleanUpMovies())
     }
  },[dispatch])
  return {
     movies,
     isLoading,
     errorMessage
  }
}

export default useHome