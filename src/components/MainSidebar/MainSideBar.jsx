import { NavLink } from 'react-router-dom'
import { CgSpinnerTwo } from 'react-icons/cg'
import useMainSidebar from './useMainSidebar'
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { useCallback } from 'react'
import SidebarSearchForm from '../SidebarSearchForm/SidebarSearchForm'
import SidebarNavLinks from '../SidebarNavLinks/SidebarNavLinks'
import SidebarGenreList from '../SidebarGenreList/SidebarGenreList'

const MainSideBar = ({ children }) => {
  const {
    open,
    setOpen,
    mainLinks,
    genreIcons,
    genres,
    isLoading,
    errorMessage,
    handleSearchSubmit,
    setSearchValue,
    searchValue,
    showModal,
    setShowModal,
  } = useMainSidebar()

  const { movies, isLoading: searchForAMovieLoader } = useSelector(
    (store) => store.searchForAMovieReducer
  )

  const activeLink =  useCallback((isActive) =>
    `flex w-full items-center p-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-gray-200 text-black dark:bg-gray-800 dark:text-white font-semibold'
        : 'text-gray-800 dark:text-gray-300'
    }`,[])

  return (
    <>
      <div className="flex relative">
        {/* Toggle Button (mobile) */}
        <button
          type="button"
          className="w-12 h-12 absolute top-0 start-0 inline-flex cursor-pointer z-50 justify-center items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-300 bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 transform ${
            open ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-200 ease-in-out sm:translate-x-0 bg-gray-100 dark:bg-gray-900`}
          aria-label="Sidebar"
        >
          <div className={`h-full px-3 py-4 overflow-y-auto ${open ? 'mt-10 pt-10':""}`}>
            {/* Search */}
           <SidebarSearchForm handleSearchSubmit={handleSearchSubmit} searchValue={searchValue} setSearchValue={setSearchValue}
           searchForAMovieLoader={searchForAMovieLoader}/>

            {/* Main Links */}
           <SidebarNavLinks mainLinks={mainLinks} activeLink={activeLink}/>

            {/* Categories */}
            <h3 className="my-3 border-y border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-2 text-lg">
              Categories
            </h3>

           <SidebarGenreList isLoading={isLoading} errorMessage={errorMessage} genres={genres} genreIcons={genreIcons} activeLink={activeLink}/>

            {/* Toggle Dark Mode */}
            <DarkModeToggle />
          </div>
        </aside>

        {/* Main Content */}
        <main className="p-4 sm:ml-64 overflow-hidden bg-white dark:bg-gray-950 min-h-screen text-black dark:text-white transition-colors">
          {children}
        </main>
      </div>

      {/* Modal for search results */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        movies={movies}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
    </>
  )
}

export default MainSideBar
