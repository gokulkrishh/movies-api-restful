import allMovies from "../data/movies.json";
import { generateMovieData } from "../utils";

const getMovieById = (id) => {
  const movie = allMovies.filter(movieData => movieData.id == id);
  if (movie.length === 0) return [];

  return generateMovieData(movie[0]);
};

export default getMovieById;
