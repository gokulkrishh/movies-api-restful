import getAllMovies from "../controllers/getAllMovies";
import getMovieById from "../controllers/getMovieById";

const routes = app => {
  app.get("/", (req, res) => {
    res.redirect("/api");
  });

  app.route("/api").get((req, res) => {
    res.send("Welcome to movies restful API's.");
  });

  app.route("/api/movies/all").get((req, res) => {
    const count = req.query.count;
    res.json({
      statusCode: 200,
      data: getAllMovies(count)
    });
  });

  app.route("/api/movies/:id").get((req, res) => {
    const id = req.params.id;
    if (!id) {
      res.json(
        {
          statusCode: 404,
          message: `Movie id is missing`
        },
        404
      );
    }
    res.status(200).json({
      statusCode: 200,
      data: getMovieById(id)
    });
  });

  app.route("/api/actors/:id").get((req, res) => {
    res.send(`Get actors for ${req.params.id}`);
  });

  app.get("*", function(req, res) {
    res.status(404).json(
      {
        statusCode: 404,
        message: "Not found"
      },
      404
    );
  });
};

export default routes;
