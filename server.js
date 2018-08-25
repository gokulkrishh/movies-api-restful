import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import routes from "./routes";

// Initilizing express
const app = express();
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enabling CORS & caching
app.use((req, res, next) => {
  if (req.method === "GET") {
    res.setHeader("Cache-Control", "public, max-age=21600");
  }

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Max-Age", "1728000"); // To avoid preflight request everytime
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  next();
});

routes(app); // Enabling the routes

const port = 8000;

// Listening to port
app.listen(port, () => {
  console.log(`Server is running in http://localhost:${8000}`);
});
