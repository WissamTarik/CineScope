import axios from './Axios'
import React from 'react'

export const ErrorHandler = (error) => {
   if(axios.isAxiosError(error)){
    return error.response?.data|| error.response?.data.message||error.message
   }
   else {
    return 'Unexpected error'
   }
}

export default ErrorHandler