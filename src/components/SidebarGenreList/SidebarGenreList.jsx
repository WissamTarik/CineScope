import React from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'

const SidebarGenreList = ({isLoading,errorMessage,genres,genreIcons,activeLink}) => {
  return (
    <> {isLoading === 'pending' ? (
              <div className="fixed inset-0 flex justify-center items-center bg-white dark:bg-black">
                <CgSpinnerTwo className="animate-spin text-gray-800 dark:text-white" size={50} />
              </div>
            ) : errorMessage ? (
              <p className="font-bold text-red-500">{errorMessage}</p>
            ) : (
              <ul className="space-y-2 font-medium">
                {genres?.map((genre) => {
                  const Icon = genreIcons.find((item) => item.name === genre.name)
                  return (
                    <li
                      key={genre.id}
                      className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group"
                    >
                      <NavLink
                        to={`/movieCategory/${genre.id}/${genre.name}`}
                        className={({ isActive }) => activeLink(isActive)}
                      >
                        {Icon && (
                          <Icon.icon
                            size={20}
                            className="me-3 group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors"
                          />
                        )}
                        <span className="group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors">
                          {genre.name}
                        </span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            )}
    
    </>
  )
}

export default SidebarGenreList