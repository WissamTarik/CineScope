import React from 'react'
import { CgSpinnerTwo } from "react-icons/cg";
import { MdOutlineError } from "react-icons/md";

const IsLoading = ({loadingState,errorMessage,children}) => {
     if(loadingState==='pending'){
         return <>
         <div className='fixed inset-0 flex justify-center items-center bg-white '>
            <CgSpinnerTwo className='animate-spin' size={100}/>
         </div>
  
         </>
     }
     else if(loadingState==='rejected'){
        return<>
           <div className='fixed inset-0 flex-col flex justify-center items-center bg-white '>
               <MdOutlineError className='text-red-500 mb-3' size={130}/>
               <h1 className='text-3xl font-bold'>{errorMessage}</h1>

           </div>
        </>
     }
  return (
    <>{children}</>
  )
}

export default IsLoading