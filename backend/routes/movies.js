const express = require("express");

const {getTrendingMovie , getMovieTrailers,getMovieDetails,getSimilarMovies,getMoviesByCategory} = require("../controllers/moviecontroller.js");

const router = express.Router();

router.get("/trending",getTrendingMovie);
router.get("/:id/trailers",getMovieTrailers);
router.get("/:id/details",getMovieDetails);
router.get("/:id/similar",getSimilarMovies);
router.get("/:category",getMoviesByCategory);

module.exports = router;