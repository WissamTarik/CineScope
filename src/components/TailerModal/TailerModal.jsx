import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

const TailerModal = ({ trailerKey, setShowTrailerModal }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-2">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg max-w-2xl w-full relative overflow-hidden">
        <button
          onClick={() => setShowTrailerModal(false)}
          className="absolute top-2 right-2 cursor-pointer text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          aria-label="Close trailer modal"
        >
          <IoCloseCircleOutline size={30} />
        </button>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-b-lg"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default TailerModal;
