import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { actGetRelatedMovies } from "../../Libraries/Redux/GetMovies/actGetRelatedMovies"
import { actGetCastForSpecificMovie } from "../../Libraries/Redux/GetCastForSpecificMovie/actGetCastForSpecificMovie"
import { cleanUpMovies } from "../../Libraries/Redux/GetMovies/MoviesSlice"
import { cleanUpCastForAMovie } from "../../Libraries/Redux/GetCastForSpecificMovie/getCastForSpecificMovieSlice"
import { actGetMovieLink } from "../../Libraries/Redux/GetSpecificMovie/actGetMovieLink"
import { actGetSpecificMovie } from "../../Libraries/Redux/GetSpecificMovie/actGetSpecificMovie"

const useMovieDetails = () => {
     const {id}=useParams()
        const dispatch=useDispatch()
        const {movies,isLoading:relatedMoviesLoader,errorMessage:relatedMoviesErrorMessage}=useSelector((store)=>store.moviesReducers)
        const {movie,isLoading,errorMessage,watchMovieLoading,movieKey}=useSelector((store)=>store.getSpecificMovieReducer)
        const {cast,isLoading:castLoader,errorMessage:errorMessageForACast}=useSelector((store)=>store.getCastReducers)
        const [trailerKey, setTrailerKey] = useState(null);
    const [showTrailerModal, setShowTrailerModal] = useState(false);
      useEffect(()=>{
      dispatch(actGetSpecificMovie(id))
      dispatch(actGetRelatedMovies(id))
      dispatch(actGetCastForSpecificMovie(id))
       return ()=>{
            dispatch(cleanUpMovies())
            dispatch(cleanUpCastForAMovie())
           }
    },[id])

    function handleWatchMovie(movieId){
      if(watchMovieLoading=='pending'){return}
          dispatch(actGetMovieLink(movieId)).unwrap().then((res)=>{
            console.log(res.movieKey);
            
              if(movieKey){
                    setTrailerKey(movieKey)
                    setShowTrailerModal(true)
                  
              }
              else{
                  toast.error(`No trailer found for "${movie?.title || 'this movie'}"`);
              }
          
          }).catch(()=>{
              toast.error(`No trailer found for "${movie?.title || 'this movie'}"`);
          })
    }
  return {
    id,
showTrailerModal,
setShowTrailerModal,
trailerKey,
movies,
relatedMoviesErrorMessage,
relatedMoviesLoader,
movie,
isLoading,
errorMessage,
watchMovieLoading,
movieKey,
castLoader,
cast,
errorMessageForACast,
 handleWatchMovie
  }
}

export default useMovieDetails