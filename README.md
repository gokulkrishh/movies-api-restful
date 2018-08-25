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

#### Get all movies

- `/api/movies/all` - To get all the movies list, by default it will give 20 movies

**Example**:

```json
{
  status: 200,
  data: [
    {
      title: "Patton Oswalt: Annihilation",
      fullTitle: "Patton Oswalt: Annihilation (2017)",
      actors: [
        "Arnulfo Wintheiser Sr.",
        "Zena Rath",
        "Enos Erdman",
        "Genevieve Ortiz",
        "Kendra Sporer",
        "Carley Pfannerstill",
        "Faye Dibbert",
        "Lauryn Leffler",
        "Laury Moore",
        "Consuelo Pollich"
      ],
      poster:
        "https://hydramovies.com/wp-content/uploads/2018/04/Patton-Oswalt-Annihilation-Movie-Poster.jpg",
      releaseDate: 2017,
      rating: 7.4,
      summary:
        "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
      id: 0,
      genre: ["Diaries", "Travel"]
    },
    {
      title: "New York Doll",
      fullTitle: "New York Doll (2005)",
      actors: [
        "Jett Johns",
        "Orpha Kihn",
        "Ms. June Ullrich",
        "Freeman Barrows",
        "Mrs. Seamus Kihn",
        "Gust Batz",
        "Braxton Stark",
        "Shawn Labadie",
        "Maudie Weber",
        "Stephania Terry"
      ],
      poster:
        "https://hydramovies.com/wp-content/uploads/2018/04/New-York-Doll-Movie-Poster.jpg",
      releaseDate: 2005,
      rating: 7.9,
      summary:
        'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.',
      id: 1,
      genre: ["Documentary", "Music"]
    },
    {
      title: "Mickey's Magical Christmas: Snowed in at the House of Mouse",
      fullTitle:
        "Mickey's Magical Christmas: Snowed in at the House of Mouse (2001)",
      actors: [
        "Renee Grady",
        "Marilou Volkman",
        "Kris Dooley",
        "Lacey Swaniawski",
        "Winston Price",
        "Clay Abshire",
        "Eliezer Pfannerstill",
        "Nathan Hyatt",
        "Jayce Cruickshank",
        "Kelvin Welch"
      ],
      poster:
        "https://hydramovies.com/wp-content/uploads/2018/04/Mickeys-Magical-Christmas-Snowed-in-at-the-House-of-Mouse-Movie-Poster.jpg",
      releaseDate: 2001,
      rating: 6.8,
      summary:
        "After everyone is snowed in at the House of Mouse, Mickey suggests they throw their own Christmas party. Everyone is happy, except for Donald who just isn't in to the Christmas spirit. So Mickey shows a series of cartoons that show just what Christmas is all about. It features a star studded cast of Disney characters from everyone's favorite animated Disney movies.",
      id: 2,
      genre: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"]
    },
    {
      title: "Mickey's House of Villains",
      fullTitle: "Mickey's House of Villains (2001)",
      actors: [
        "Kian Gutmann",
        "Reva Steuber",
        "Joel Cummings",
        "Hailie Ratke V",
        "Miss Eileen Harris",
        "Emily Rogahn V",
        "Veda Kunze",
        "Elwyn Corwin",
        "Pedro Schaefer",
        "Nelson Quitzon"
      ],
      poster:
        "https://hydramovies.com/wp-content/uploads/2018/04/Mickeys-House-of-Villains-Movie-Poster.jpg",
      releaseDate: 2001,
      rating: 6.6,
      summary:
        "The villains from the popular animated Disney films are gathered at the House of Mouse with plans to take over. Soon, the villains take over the house and kick out Mickey, Donald and Goofy. It's all up to Mickey and his friends to overthrow evil and return the House of Mouse to normal--or as close to normal as it get's.",
      id: 3,
      genre: ["Animation", "Comedy", "Family", "Fantasy", "Horror"]
    },
    {
      title: "And Then I Go",
      fullTitle: "And Then I Go (2017)",
      actors: [
        "Nicole Stehr",
        "Tatum Jerde",
        "Domenico Thiel",
        "Logan Hoppe",
        "Einar Barrows",
        "Teresa Bashirian",
        "Dr. Brandi Bahringer",
        "Margie Lang",
        "Gustave Batz",
        "Myles Gleichner"
      ],
      poster:
        "https://hydramovies.com/wp-content/uploads/2018/04/And-Then-I-Go-Movie-Poster.jpg",
      releaseDate: 2017,
      rating: 7.6,
      summary:
        'In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel "Project X" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.',
      id: 4,
      genre: ["Drama"]
    }
  ]
}
```

#### Get movies by count

- `/api/movies/all?count=10` - To get movies list based on the count

#### Get movie by id

- `/api/movies/:id` - To get a movie based on an id

**Example**:

```json
{
  status: 200,
  {
    title: "Mickey's Magical Christmas: Snowed in at the House of Mouse",
    fullTitle:
      "Mickey's Magical Christmas: Snowed in at the House of Mouse (2001)",
    actors: [
      "Kirk Waelchi",
      "Malachi Wolff",
      "Marcus Runolfsdottir",
      "Stella Mohr",
      "Genoveva Haley",
      "Anika Marks",
      "Emily Armstrong",
      "Roman Prosacco Sr.",
      "Deonte Pouros",
      "Tavares Schimmel"
    ],
    poster:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mickeys-Magical-Christmas-Snowed-in-at-the-House-of-Mouse-Movie-Poster.jpg",
    releaseDate: 2001,
    rating: 6.8,
    summary:
      "After everyone is snowed in at the House of Mouse, Mickey suggests they throw their own Christmas party. Everyone is happy, except for Donald who just isn't in to the Christmas spirit. So Mickey shows a series of cartoons that show just what Christmas is all about. It features a star studded cast of Disney characters from everyone's favorite animated Disney movies.",
    id: "2",
    genre: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"]
  }
}
```

#### MIT License
