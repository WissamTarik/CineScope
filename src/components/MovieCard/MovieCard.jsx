import React from 'react'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const MovieCard = ({movie,fullWidth = false}) => {
  return (
   <Link to={`/movieDetails/${movie.id}`} className="cursor-pointer hover:scale-[1.05] transition-transform"
     aria-label={`View details for ${movie.title}`}
   >
  <div className={` items-center p-2 ${fullWidth ? 'w-full' : 'flex justify-center'}`}>
    <div className="mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl dark:shadow-md">
      <div className={`rounded-3xl ${fullWidth ? 'w-full' : 'max-w-[270px]'} shadow-sm bg-white dark:bg-gray-800`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className={`rounded-t-3xl  justify-center h-56 grid object-cover  ${fullWidth ? 'w-full' : 'w-[270px]'}`}
        
          alt={movie.title||'Movie poster'}
          loading='lazy'
        />
        <div className="group px-5 py-3 grid z-10">
          <h2 className="group-hover:text-cyan-700 dark:group-hover:text-cyan-400 font-bold md:text-xl line-clamp-2 text-gray-800 dark:text-white">
            {movie.title.slice(0, 8)}...
          </h2>
          <span className="text-slate-500 dark:text-gray-300 pt-2 font-semibold">
            ({movie.release_date})
          </span>
          <div className="flex justify-between mt-2">
            <div className="font-black flex flex-col">
              <span className="text-lg flex gap-x-1 items-center group-hover:text-yellow-600 dark:text-yellow-400">
                {movie.vote_average}
                <FaStar className="text-yellow-400" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Link>

  )
}

export default React.memo(MovieCard,(prevProps, nextProps) => {
  return prevProps.movie.id === nextProps.movie.id;
})