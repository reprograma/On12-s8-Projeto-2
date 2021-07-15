
const express = require("express");
const app = express();

const series = require("./routes/seriesRoutes")

app.use("/series", series);



module.exports = app;