import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import LoadingFallback from '../Feedback/LoadingFallback'
const Home=lazy(()=>import('../pages/Home/Home'))
const TopRated=lazy(()=>import('../pages/TopRated/TopRated'))
const UpComingMovies=lazy(()=>import('../pages/UpComingMovies/UpComingMovies'))
const ActorDetails=lazy(()=>import('../pages/ActorDetails/ActorDetails'))
const MovieCategory=lazy(()=>import('../pages/MovieCategory/MovieCategory'))
const MovieDetails=lazy(()=>import('../pages/MovieDetails/MovieDetails'))

const AppRouter = () => {
    const router=createBrowserRouter([
    {path:'',element:<Layout/> ,children:[
        {index:true,element:<Home/>},
        {path:'/movieDetails/:id',element:<MovieDetails/>},
        {path:'/topRated',element:<TopRated/>},
        {path:'/upComing',element:<UpComingMovies/>},
        {path:'movieDetails/:movieId/actorDetails/:id',element:<ActorDetails/>},
        {path:'/movieCategory/:id/:categoryName',element:<MovieCategory/>},
    ]}
])
  return (
    <Suspense fallback={<LoadingFallback/>}>


      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default AppRouter