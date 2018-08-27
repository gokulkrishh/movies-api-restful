import getAllMovies from "../controllers/getAllMovies";
import getMovieById from "../controllers/getMovieById";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.redirect("/api");
  });

  app.route("/api").get((req, res) => {
    res.send("Welcome to movies restful API's.");
  });

  app.route("/api/movies/all").get((req, res) => {
    res.status(200).json({
      message: "success",
      data: getAllMovies(),
    });
  });

  app.route("/api/movies/:id").get((req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(404).json({
        message: `Movie id is missing`,
      });
    }
    const data = getMovieById(id);
    if (data.length === 0) {
      res.status(404).json({
        message: `Movie for ${id} is not there`,
      });
    } else {
      res.status(200).json({
        message: "success",
        data: getMovieById(id),
      });
    }
  });

  app.route("/api/actors/:id").get((req, res) => {
    res.send(`Get actors for ${req.params.id}`);
  });

  app.get("*", (req, res) => {
    res.status(404).json({
      message: "Not found",
    });
  });
};

export default routes;
