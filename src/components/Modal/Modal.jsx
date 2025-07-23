import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoCloseCircleOutline } from "react-icons/io5";
import MovieCard from '../MovieCard/MovieCard';
const Modal = ({ showModal, setShowModal, movies, setSearchValue, searchValue }) => {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center"
          onClick={() => {
            setShowModal(false);
            setSearchValue('');
          }}
        >
          <div
            className="bg-white dark:bg-gray-800 text-black dark:text-white w-[90%] md:w-[600px] max-h-[80vh] overflow-y-auto rounded-xl p-4 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 cursor-pointer transition-colors hover:text-black dark:hover:text-white"
              onClick={() => {
                setShowModal(false);
                setSearchValue('');
              }}
            >
              <IoCloseCircleOutline size={30} />
            </button>
            <h2 className="text-xl font-bold mb-4">{searchValue}</h2>
            {movies?.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No movies found for {searchValue}</p>
            ) : (
              <ul className="space-y-3">
                {movies?.map((movie) => (
                  <li key={movie.id} className="border dark:border-gray-700 p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                   <MovieCard movie={movie} fullWidth/>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
