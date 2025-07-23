
import { FaRegSun ,FaRegMoon} from "react-icons/fa";
import useDarkModeToggle from './useDarkModeToggle';

const DarkModeToggle = () => {
   const {isDark,setIsDark}=useDarkModeToggle()
  return (
    <button
  onClick={() => setIsDark(!isDark)}
  className="w-full flex items-center justify-start gap-2 mt-4 
             bg-gray-200 text-gray-800 hover:bg-gray-300
             dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 
             px-3 py-2 rounded-lg transition"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {isDark ? (
    <FaRegSun size={20} />
  ) : (
    <FaRegMoon size={20} />
  )}
  <span className="text-sm font-medium">
    {isDark ? 'Light Mode' : 'Dark Mode'}
  </span>
</button>

  )
}

export default DarkModeToggle