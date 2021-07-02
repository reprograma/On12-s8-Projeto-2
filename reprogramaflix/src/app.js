const express = require("express"); // importando express
const app = express(); // instanciando o express para acessar as funcionalidades contidas nele

// chama as rotas
const movies = require("./routes/moviesRoutes")
const series = require("./routes/seriesRoutes")

// definir rota padrão
app.use("/filmes", movies)
app.use("/series", series)

module.exports = app