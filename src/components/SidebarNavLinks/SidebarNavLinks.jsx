import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarNavLinks = ({mainLinks,activeLink}) => {
  return (
     <ul className="space-y-2 font-medium">
                  {mainLinks.map(({path,icon:MyIcon,text}, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group"
                    >
                      <NavLink to={path} className={({ isActive }) => activeLink(isActive)}>
                        <span className="me-3 group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors">
                          <MyIcon size={20} />
                        </span>
                        <span className="group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors">
                          {text}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
  )
}

export default SidebarNavLinks