import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { actGetSpecificGenresOfMovies } from "../../Libraries/Redux/GetSpecificGenresOfMovies/actGetSpecificGenresOfMovies";
import { cleanUpGetSpecificGenresOfMovie } from "../../Libraries/Redux/GetSpecificGenresOfMovies/GetSpecificGenresOfMoviesSlice";
import IsLoading from "../../Feedback/IsLoading";
import TopMovieCard from "../../components/TopMovieCard/TopMovieCard";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieCategory = () => {
   const {id,categoryName}=useParams()
   const {isLoading,errorMessage,movies}=useSelector((store=>store.getSpecificGenresOfMoviesReducer))
   const dispatch=useDispatch()
   useEffect(()=>{
     dispatch(actGetSpecificGenresOfMovies(id))
     return ()=>{
      dispatch(cleanUpGetSpecificGenresOfMovie())
     }
   },[id])
  return (
    <section>
      <h1 >{categoryName}</h1>
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

export default MovieCategory