import allMovies from "../data/movies.json";
import { generateActorNames, generateNumberArray, generateRandomGenres, generateAllMovieData } from "../utils";

const getAllMovies = (count = 41) => {
  const moviesCount = generateNumberArray(count);
  return moviesCount.map((movieCount, index) => {
    return generateAllMovieData(allMovies[movieCount]);
  });
};

export default getAllMovies;
