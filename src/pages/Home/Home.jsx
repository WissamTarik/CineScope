import MovieCard from "../../components/MovieCard/MovieCard";
import IsLoading from "../../Feedback/IsLoading";
import useHome from "./useHome";

const Home = () => {
  const { movies, isLoading, errorMessage } = useHome();
  return (
    <section>
      <h1>All movies</h1>
      <IsLoading loadingState={isLoading} errorMessage={errorMessage}>
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </IsLoading>
    </section>
  );
};

export default Home;
