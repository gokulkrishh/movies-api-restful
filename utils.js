import faker from "faker";

export const generateNumberArray = (num = 1) => {
  return Array.from(Array(parseInt(num)).keys());
};

export const generateActorNames = num => {
  const nums = generateNumberArray(num);
  return nums.map(key => faker.name.findName());
};

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
  "Fantasy"
];

export const generateRandomGenres = () => {
  return listOfGenres[Math.floor(Math.random() * listOfGenres.length)];
};

export const generateRatings = (min = 5, max = 10) => {
  return Math.floor(Math.random() * max) + min;
};

export const generateMovieData = movie => {
  let genre = movie.Genre;
  if (genre === "") {
    genre = [generateRandomGenres(), generateRandomGenres()];
  } else {
    genre = genre.split(",");
  }
  return {
    title: movie.Title,
    actors: movie.Actors, // Have to generate real actor name
    poster: movie.ImageURL,
    releaseDate: movie.Released,
    plot: movie.Plot,
    rating: movie.imdbRating,
    duration: movie.Runtime,
    summary: movie.summary,
    poster: movie.Poster,
    production: movie.Production,
    id: movie.id,
    genre
  };
};
