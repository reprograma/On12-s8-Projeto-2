const express = require("express");
const app = express();


const movies = require("./routes/moviesRoutes");
const series = require("./routes/seriesRoutes");

app.use("/filmes", movies); 
app.use("/series", series);

module.exports = app