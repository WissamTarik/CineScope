import React from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

const LoadingFallback = () => {
  return (
     <div className="fixed inset-0 flex justify-center items-center bg-white dark:bg-black">
    <CgSpinnerTwo className="animate-spin text-gray-800 dark:text-white" size={80} />
  </div>
  )
}

export default LoadingFallback