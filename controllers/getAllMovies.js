import allMovies from "../data/movies.json";
import { generateNumberArray, generateAllMovieData } from "../utils";

const getAllMovies = (count = allMovies.length) => {
  const moviesCount = generateNumberArray(count);
  return moviesCount.map(movieCount => generateAllMovieData(allMovies[movieCount]));
};

export default getAllMovies;
