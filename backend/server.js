const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.js");
const movieRoutes = require("./routes/movies.js");
const tvRoutes = require("./routes/tv.js");
const searchRoutes = require("./routes/search.js");

const protetcRouter = require("./middleware/protectRoute.js");

const ENV_VARS = require("./config/envVars.js");
const connectDB = require("./config/db.js");
const app = express();

const PORT = ENV_VARS.PORT;

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",protetcRouter,movieRoutes);
app.use("/api/v1/tv",protetcRouter,tvRoutes);
app.use("/api/v1/search",protetcRouter,searchRoutes);

app.listen(5000,()=>{
    console.log('port listening on'+PORT)
    connectDB();
});


