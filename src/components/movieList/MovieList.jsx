import "./MovieList.css";
import { MovieCard } from "../movieCard/MovieCard";

export function MovieList({ movies }) {
  console.log("from movie list");
  console.log(movies);

  return (
    <div className="list-container">
      {movies.map((movie) => (
        <>
          <MovieCard
            key={movie.id}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
          />
        </>
      ))}
    </div>
  );
}
