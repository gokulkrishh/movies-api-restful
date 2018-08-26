# Movies API Restful

**Restful api for movies, movie, cast etc,**

## Setup

**Step 1:** To install dependencies

```bash
npm install or yarn
```

**Step 2:** To run the server

```bash
npm start or yarn start
```

**Step 3:** To run server & debug it via chrome DevTools

```bash
npm run debug
```

## API's

### Get all movies

#### - `/api/movies/all` - To get all the movies list, by default it will give 20 movies

**Example**:

```json
{
  "statusCode":200,
  "data": [
  {
    "title": "Jumanji",
    "poster": "https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "releaseDate": "15 Dec 1995",
    "year": "1995",
    "plot": "After being trapped in a jungle board game for 26 years, a Man-Child wins his release from the game. But, no sooner has he arrived that he is forced to play again, and this time sets the creatures of the jungle loose on the city. Now it is up to him to stop them.",
    "rating": "6.9",
    "id": 1,
    "casts": "Robin Williams, Jonathan Hyde, Kirsten Dunst, Bradley Pierce",
    "genre": [
      "Adventure",
      "Family",
      "Fantasy"
    ]
  },
  {
    "title": "Deadpool",
    "poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "releaseDate": "12 Feb 2016",
    "year": "2016",
    "plot": "This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    "rating": "8.0",
    "id": 2,
    "casts": "Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer",
    "genre": [
      "Action",
      "Adventure",
      "Comedy"
    ]
  },
  {
    "title": "The Dark Knight",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "releaseDate": "18 Jul 2008",
    "year": "2008",
    "plot": "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\"and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
    "rating": "9.0",
    "id": 3,
    "casts": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ]
  },
  {
    "title": "The Godfather",
    "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "releaseDate": "24 Mar 1972",
    "year": "1972",
    "plot": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.",
    "rating": "9.2",
    "id": 4,
    "casts": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
    "genre": [
      "Crime",
      "Drama"
    ]
  },
  {
    "title": "Mission: Impossible",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg",
    "releaseDate": "22 May 1996",
    "year": "1996",
    "plot": "Jim Phelps was sent to Prague for a mission to prevent the theft of classified material. His wife Claire and his trusted partner Ethan Hunt were members of Phelps team. Unfortunately, something went horribly wrong and the mission failed, leaving Ethan Hunt the lone survivor. After he reported the failed mission, Kettridge the head of the agency suspects Ethan of being the culprit for the failed mission. Now, Ethan uses unorthodox methods (Which includes the aid of an arms dealer going by the name 'Max') to try to find who set him up and to clear his name",
    "rating": "7.1",
    "id": 5,
    "casts": "Tom Cruise, Jon Voight, Emmanuelle Béart, Henry Czerny",
    "genre": [
      "Action",
      "Adventure",
      "Thriller"
    ]
  }]
}
```

### Get a movie by id

#### - `/api/movies/:id` - To get a movie based on an id

**Example**:

```json
{
  "statusCode": 200,
  "data": {
    "title": "Jumanji",
    "poster": "https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "releaseDate": "15 Dec 1995",
    "year": "1995",
    "plot": "After being trapped in a jungle board game for 26 years, a Man-Child wins his release from the game. But, no sooner has he arrived that he is forced to play again, and this time sets the creatures of the jungle loose on the city. Now it is up to him to stop them.",
    "casts": "Robin Williams, Jonathan Hyde, Kirsten Dunst, Bradley Pierce",
    "rating": "6.9",
    "production": "Sony Pictures Home Entertainment",
    "ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "53%"
      },
      {
        "Source": "Metacritic",
        "Value": "39/100"
      }
    ],
    "language": "English, French",
    "awards": "4 wins & 9 nominations.",
    "imdbID": "tt0113497",
    "website": "N/A",
    "id": 1,
    "rated": "PG",
    "genre": [
      "Adventure",
      " Family",
      " Fantasy"
    ]
  }
}
```

#### MIT License
