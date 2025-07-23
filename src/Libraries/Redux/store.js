import { configureStore } from "@reduxjs/toolkit";
import { getSpecificMovieReducer } from "./GetSpecificMovie/getSpecificMovieSlice";
import { moviesReducers } from "./GetMovies/MoviesSlice";
import { getCastReducers } from "./GetCastForSpecificMovie/getCastForSpecificMovieSlice";
import { actorDetailsReducers } from "./GetActorDetails/ActorDetailsSlice";
import { getMoviesGenresReducer } from "./GetMoviesGenres/GetMoviesGenresSlice";
import { getSpecificGenresOfMoviesReducer } from "./GetSpecificGenresOfMovies/GetSpecificGenresOfMoviesSlice";
import { searchForAMovieReducer } from "./SearchForAMovie/SearchForAMovieSlice";

export const store=configureStore({
    reducer:{
        moviesReducers,
        getSpecificMovieReducer,
        getCastReducers,
        actorDetailsReducers,
        getMoviesGenresReducer,
        getSpecificGenresOfMoviesReducer,
        searchForAMovieReducer
    }
})