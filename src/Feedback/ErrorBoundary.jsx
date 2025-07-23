import React from 'react'

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state={hasError:false}
  }
  static getDerivedStateFromError(){
    return {hasError:true}
  }
componentDidCatch(error,info){
  console.error("Error caught by boundary",error,info)

}
render(){
  if(this.state.ErrorBoundary){
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-black text-black dark:text-white">
          <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Please refresh the page or try again later.</p>
        </div>
    )
  }
  return this.props.children
}
}
export default ErrorBoundary