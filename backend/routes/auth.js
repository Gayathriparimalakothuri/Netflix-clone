const express = require("express");


const {signup,login,logout,authCheck }= require("../controllers/controller.js");

const protectRouter = require("../middleware/protectRoute.js");

// authentication routes
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck", protectRouter, authCheck);


module.exports = router;