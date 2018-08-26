import allMovies from "../data/movies.json";
import { generateActorNames, generateNumberArray, generateRandomGenres, generateAllMovieData } from "../utils";

const getAllMovies = (count = 10) => {
  if (count > 40) count = 41;
  const moviesCount = generateNumberArray(count);
  return moviesCount.map((movieCount, index) => {
    const movie = allMovies.filter(movie => movie.id === id);
    return generateAllMovieData(movie);
  });
};

export default getAllMovies;
