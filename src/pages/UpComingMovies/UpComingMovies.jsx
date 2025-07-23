import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actGetUpcomingMovies } from '../../Libraries/Redux/GetMovies/actGetUpcomingMovies'
import { cleanUpMovies } from '../../Libraries/Redux/GetMovies/MoviesSlice'
import IsLoading from './../../Feedback/IsLoading';
import TopMovieCard from './../../components/TopMovieCard/TopMovieCard';
import MovieCard from '../../components/MovieCard/MovieCard';

const UpComingMovies = () => {
  const dispatch=useDispatch()
  const {isLoading,errorMessage,movies}=useSelector((store)=>store.moviesReducers)
  useEffect(() => {
    dispatch(actGetUpcomingMovies())
  
    return () => {
       dispatch(cleanUpMovies())
    }
  }, [])
  
  return (
    <section>
      <h1>Upcoming movies</h1>
      <IsLoading errorMessage={errorMessage} loadingState={isLoading}>
        <>
         <TopMovieCard movie={movies[0]}/>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
            {movies?.slice(1)?.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
        </>
      </IsLoading>
    </section>
  )
}

export default UpComingMovies