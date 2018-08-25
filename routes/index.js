const routes = app => {
  app.get("/", (req, res) => {
    res.redirect("/api");
  });

  app.route("/api").get((req, res) => {
    res.send("Welcome to movies restful API's.");
  });

  app.route("/api/movies/all").get((req, res) => {
    res.send("Get all movies");
  });

  app.route("/api/movies/:id").get((req, res) => {
    res.send(`Get movie for ${req.params.id}`);
  });

  app.route("/api/actors/:id").get((req, res) => {
    res.send(`Get actors for ${req.params.id}`);
  });

  app.get("*", function(req, res) {
    res.json(
      {
        statusCode: 404,
        error: "Not found",
        message: "Not found"
      },
      404
    );
  });
};

export default routes;
