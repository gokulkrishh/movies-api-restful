import allMovies from "../data/movies.json";
import { generateMovieData, generateActorNames } from "../utils";

const getMovieById = (id) => {
  const movie = allMovies.filter(movie => movie.id == id);
  console.log(movie);
  if (movie.length === 0) return [];
  else {
    return generateMovieData(movie[0]);
  }
};

export default getMovieById;
