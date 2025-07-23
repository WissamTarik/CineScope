
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import IsLoading from '../../Feedback/IsLoading';
import ReactSlider from '../../components/ReactSlider/ReactSlider';
import { CgSpinnerTwo } from 'react-icons/cg';
import TailerModal from '../../components/TailerModal/TailerModal';
import useMovieDetails from './useMovieDetails';

const MovieDetails = () => {
   const {id,showTrailerModal,setShowTrailerModal,trailerKey,movies,relatedMoviesErrorMessage,relatedMoviesLoader,
        movie,isLoading,errorMessage,watchMovieLoading,castLoader,cast,errorMessageForACast,handleWatchMovie}=useMovieDetails()
  
  return (
<section className="movie-details">
  <IsLoading loadingState={isLoading} errorMessage={errorMessage}>
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 text-center rounded-2xl">
            <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} className="sm:w-3/4 w-1/2 mx-auto" />
            <h3 className="my-3 text-lg font-bold">Production Companies Logo</h3>
            <div className="flex gap-3 py-4 overflow-x-auto mx-auto justify-center">
              {movie?.production_companies?.map((company) =>
                <img key={company.id} src={`https://image.tmdb.org/t/p/w200/${company?.logo_path}`} alt={company.name} className="size-12 object-contain rounded-md hover:opacity-100 transition duration-300" />
              )}
            </div>
          </div>

          <div className="w-full lg:w-2/3 px-4 text-center md:text-start">
            <h2 className="text-3xl max-[360px]:text-2xl font-bold mb-2">{movie?.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{movie?.release_date}</p>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">Genres:</span>
              {movie?.genres?.map((genre) =>
                <span key={genre.id} className="text-gray-500 dark:text-gray-400">{genre.name}, </span>
              )}
            </div>

            <div className="flex items-center mb-4 justify-center md:justify-start">
              <FaStar className="text-yellow-500" size={20} />
              <span className="ml-2 text-gray-600 dark:text-gray-300">{movie?.vote_average?.toFixed(2)} ({movie?.vote_count} Vote)</span>
            </div>

            <p className="text-gray-700 dark:text-gray-200 mb-6">{movie?.overview}</p>

            <div className="mb-4">
              <h2 className="text-3xl font-bold capitalize mb-3">Top Cast</h2>
              <IsLoading loadingState={castLoader} errorMessage={errorMessageForACast}>
                <div className="grid max-[400px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {cast.map((actor) =>
                    <Link to={`actorDetails/${actor.id}`} key={actor.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden mx-auto">
                      <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} />
                      <div className="p-4">
                        <h4 className="text-[14px] font-bold text-gray-800 dark:text-gray-100">{actor?.name.slice(0, 8)}...</h4>
                        <h5 className="text-gray-600 dark:text-gray-300 font-bold text-[14px]">{actor?.character.slice(0, 7)}</h5>
                      </div>
                    </Link>
                  )}
                </div>
              </IsLoading>
            </div>

            <div className="flex space-x-4 mb-6 justify-center md:justify-start">
              <button
                className={`bg-indigo-600 ${watchMovieLoading !== 'pending' && 'cursor-pointer'} justify-center flex gap-1 items-center text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                onClick={() => handleWatchMovie(id)}
                disabled={watchMovieLoading === 'pending'}
              >
                {watchMovieLoading === 'pending' ? <CgSpinnerTwo className="animate-spin text-white" size={24} /> : "Watch Trailer"}
              </button>

           
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Spoken Languages:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {movie?.spoken_languages?.map((language) =>
                  <li key={language.iso_639_1}>{language.english_name}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </IsLoading>

  <IsLoading errorMessage={relatedMoviesErrorMessage} loadingState={relatedMoviesLoader}>
    <div className="mt-3">
      <ReactSlider movies={movies} title={'Recommendation'} />
    </div>
  </IsLoading>

  {showTrailerModal && <TailerModal trailerKey={trailerKey} setShowTrailerModal={setShowTrailerModal} />}
</section>

  )
}

export default MovieDetails