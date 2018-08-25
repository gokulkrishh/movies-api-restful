import allMovies from "../data/movies.json";
import { generateMovieData, generateActorNames } from "../utils";

const getMovieById = id => {
  const movie = allMovies[id];
  if (!movie) return [];
  else {
    movie.id = id;
    return generateMovieData(movie);
  }
};

export default getMovieById;
