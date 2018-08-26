import allMovies from "../data/movies.json";
import { generateActorNames, generateNumberArray, generateRandomGenres, generateAllMovieData } from "../utils";

const getAllMovies = (count = 10) => {
  if (count > 40) count = 40;
  const moviesCount = generateNumberArray(count);
  return moviesCount.map((movieCount, index) => {
    const movie = allMovies[movieCount];
    movie.id = movieCount;
    return generateAllMovieData(movie);
  });
};

export default getAllMovies;
