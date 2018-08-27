export const generateNumberArray = (num = 1) => Array.from(Array(parseInt(num)).keys()); //eslint-disable-line

export const listOfGenres = [
  "Science Fiction",
  "Drama",
  "Action and Adventure",
  "Romance",
  "Mystery",
  "Horror",
  "Travel",
  "Science",
  "History",
  "Comedy",
  "Animation",
  "Diaries",
  "Biographies",
  "Fantasy",
];

export const generateRandomGenres = () => listOfGenres[Math.floor(Math.random() * listOfGenres.length)];

export const generateRatings = (min = 5, max = 10) => Math.floor(Math.random() * max) + min;

const generateGenre = (movie) => {
  let genre = movie.Genre;
  if (genre === "" || !genre) {
    genre = [generateRandomGenres(), generateRandomGenres()];
  } else {
    genre = genre.split(",");
  }
  return genre;
};

export const generateAllMovieData = (movie) => {
  const genre = generateGenre(movie);
  return {
    title: movie.Title,
    poster: movie.Poster,
    releaseDate: movie.Released,
    year: movie.Year,
    plot: movie.Plot,
    rating: movie.imdbRating,
    summary: movie.summary,
    id: movie.id,
    casts: movie.Actors,
    genre,
  };
};

export const generateMovieData = (movie) => {
  const genre = generateGenre(movie);
  return {
    title: movie.Title,
    poster: movie.Poster,
    releaseDate: movie.Released,
    year: movie.Year,
    plot: movie.Plot,
    casts: movie.Actors,
    rating: movie.imdbRating,
    summary: movie.summary,
    production: movie.Production,
    ratings: movie.Ratings,
    language: movie.Language,
    awards: movie.Awards,
    imdbID: movie.imdbID,
    website: movie.Website,
    id: movie.id,
    rated: movie.Rated,
    genre,
  };
};
