const express = require("express");

const app = express();


const series = require("./routes/serieRouter")
const movies = require("./routes/moviesRoutes")

app.use("/series", series )
app.use("/filmes", movies )


module.exports = app
