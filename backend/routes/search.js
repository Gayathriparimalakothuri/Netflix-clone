const express = require("express");

const router = express.Router();

const {searchMovie,searchPerson,searchTv,getSearchHistory,removeHistoryById} = require("../controllers/searchcontroller");

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router.get("/tv/:query",searchTv);

router.get("/history",getSearchHistory);

router.delete("/history/:id",removeHistoryById);

module.exports = router;