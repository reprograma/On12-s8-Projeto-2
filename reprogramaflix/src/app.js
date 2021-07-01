//responsável por implementar o express e definir a rota principal.

const express = require("express");
const app = express();


const movies = require("./routes/moviesRoutes");
const series = require("./routes/seriesRoutes");

app.use("/filmes", movies); //rota principal
app.use("/series", series);

module.exports = app