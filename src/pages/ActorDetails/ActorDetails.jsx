import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IsLoading from './../../Feedback/IsLoading';
import { cleanUpActorDetails } from '../../Libraries/Redux/GetActorDetails/ActorDetailsSlice';
import { actGetActorDetails } from '../../Libraries/Redux/GetActorDetails/actGetActorDetails';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { actGetMoviesOfAnActor } from '../../Libraries/Redux/GetActorDetails/actGetMoviesOfAnActor';
import ReactSlider from '../../components/ReactSlider/ReactSlider';

const ActorDetails = () => {
  const dispatch = useDispatch();
  const { isLoading, actor, errorMessage, movies } = useSelector((store) => store.actorDetailsReducers);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetActorDetails(id));
    dispatch(actGetMoviesOfAnActor(id));

    return () => {
      dispatch(cleanUpActorDetails());
    };
  }, [id]);

  return (
    <>
      <section
        className="font-sans antialiased text-gray-900 dark:text-white leading-normal tracking-wider bg-cover"
        style={{
          backgroundImage:
            'linear-gradient(rgba(238, 238, 238, 1) 38%, rgba(67, 71, 74, 0.5) 78%)',
        }}
      >
        <IsLoading loadingState={isLoading} errorMessage={errorMessage}>
          <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
            <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white dark:bg-gray-800 opacity-90 mx-6 lg:mx-0">
              <div className="p-4 md:p-12 text-center lg:text-left">
                <div
                  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${actor?.profile_path})`,
                  }}
                />
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{actor?.name}</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />

                {actor?.birthday && (
                  <p className="pt-2 text-gray-600 dark:text-gray-300 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <span className="me-2">
                      <FaCalendarAlt size={14} />
                    </span>
                    {actor?.birthday}
                  </p>
                )}

                <p className="pt-8 text-sm text-gray-700 dark:text-gray-200">{actor?.biography}</p>

                {actor?.homepage && (
                  <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    <a
                      href={actor?.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Read more
                    </a>
                  </p>
                )}
              </div>
            </div>

            <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
                alt={actor?.name}
                className="sm:w-3/4 w-1/2 lg:block hidden me-auto rounded-xl"
              />
            </div>
          </div>
        </IsLoading>
      </section>

      <section className="mt-3">
        <IsLoading errorMessage={errorMessage} loadingState={isLoading}>
          <ReactSlider movies={movies} title={`${actor?.name} Movies`} />
        </IsLoading>
      </section>
    </>
  );
};

export default ActorDetails;
