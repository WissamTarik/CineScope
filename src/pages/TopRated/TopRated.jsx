import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IsLoading from './../../Feedback/IsLoading';
import { cleanUpMovies } from '../../Libraries/Redux/GetMovies/MoviesSlice';
import { actGetTopRatedMovies } from '../../Libraries/Redux/GetMovies/actGetTopRatedMovies';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import TopMovieCard from '../../components/TopMovieCard/TopMovieCard';

const TopRated = () => {
    const dispatch=useDispatch()
    const {isLoading,errorMessage,movies}=useSelector((store)=>store.moviesReducers)
    useEffect(() => {
      dispatch(actGetTopRatedMovies())
    
      return () => {
        dispatch(cleanUpMovies())
      }
    }, [])
    
  return (
  <IsLoading loadingState={isLoading} errorMessage={errorMessage}>

      <section className="">
  <h1 >Top Rated Movies</h1>

<TopMovieCard movie={movies[0]}/>
  <section>
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-4'>
        {movies?.slice(1).map((movie)=><MovieCard movie={movie}/>)}
    </div>
  </section>
</section>
  </IsLoading>

  )
}

export default TopRated