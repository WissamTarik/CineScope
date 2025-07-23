import React from 'react'
import { Link } from 'react-router-dom'

const TopMovieCard = ({movie}) => {
    const bgStyle = movie?.poster_path
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};
  return (
 <header className='relative  h-[490px]  rounded-lg overflow-hidden mx-auto lg:w-[900px] md:w-[700px] sm:w-[400px] w-screen xl:w-[1024px]' >
    <Link to={`/movieDetails/${movie?.id}`}
  style={bgStyle}
  className=" w-full h-full  bg-cover absolute inset-0 bg-position-[center_center]"
>

    <div className='sm:w-1/2 w-3/4  text-white  text-start justify-center pt-12 px-4'>
        <h2 className="text-2xl font-bold mb-3">{movie?.title || 'Untitled Movie'}</h2>
          <p className="text-sm leading-6 line-clamp-6">
            {movie?.overview || 'No description available.'}
          </p>

    </div>
</Link>
 </header>  )
}

export default TopMovieCard