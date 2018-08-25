import allMovies from "../data/movies";
import { generateActorNames, generateNumberArray, generateRandomGenres, generateMovieData } from "../utils";

const getAllMovies = (count = 10) => {
  const moviesCount = generateNumberArray(count);
  return moviesCount.map((movieCount, index) => {
    const movie = allMovies[movieCount];
    movie.id = movieCount;
    return generateMovieData(movie);
  });
};

export default getAllMovies;
