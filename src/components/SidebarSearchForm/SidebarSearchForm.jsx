import React from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

const SidebarSearchForm = ({handleSearchSubmit,searchValue,setSearchValue,searchForAMovieLoader}) => {
  return (
     <form className="mb-4" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search for a movie..."
                className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button
                className="w-full cursor-pointer text-center mx-auto py-2 mt-2 rounded-lg bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {searchForAMovieLoader === 'pending' ? (
                  <CgSpinnerTwo className="animate-spin mx-auto" size={30} />
                ) : (
                  'Search'
                )}
              </button>
            </form>
  )
}

export default SidebarSearchForm