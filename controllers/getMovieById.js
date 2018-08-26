import allMovies from "../data/movies.json";
import { generateMovieData, generateActorNames } from "../utils";

const getMovieById = (id) => {
  const movie = allMovies.filter(movie => movie.id === id);
  if (!movie) return [];
  else {
    return generateMovieData(movie);
  }
};

export default getMovieById;
