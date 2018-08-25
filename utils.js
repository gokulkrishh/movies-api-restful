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
  let genre = movie.Categories;
  if (genre === "Uncategorized") {
    genre = [generateRandomGenres(), generateRandomGenres()];
  } else {
    genre = genre.split("|");
  }
  return {
    title: movie.Title,
    fullTitle: movie.fulltitle,
    actors: generateActorNames(10), // Have to generate real actor name
    poster: movie.ImageURL,
    releaseDate: movie.movie_year,
    rating: movie.imdb_rating,
    summary: movie.summary,
    id: movie.id,
    genre
  };
};
