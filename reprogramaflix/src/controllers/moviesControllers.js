
const movies = require("../models/filmes.json")

const home = (request, response) => {
  response.status(200).send(
    {
      "mensagem": "Ola pessoas, seja bem vinda ao Reprogramaflix"
    }
  )
}

const getAll = (request, response) => {
  response.status(200).send(movies)

};

const getById = (request, response) => {
  const requesteId = request.params.id;

  const filteredId = movies.find(movie => movie.id == requesteId);
  response.status(200).send(filteredId);
}
const getByTitle = (request, response) => {
  const requestedTitle = request.query.title.toLowerCase()
  const filteredTitle = movies.find(movie => movie.title.tolowerCase().includes(requestedTitle))
  console.log(filteredTitle)

  if (requestedTitle === "" || filteredTitle === undefined) {
    response.status(404).send({
      "message": "Por favor, insira um título válido."
    })
  } else {
    response.status(200).send(filteredTitle)
  }
};


const getByGenre = (request, response) => {

  const requestedGenre = request.query.genre;
  let movieList = [];


  movies.forEach(movie => {
    let genreList = movie.genre.split(",")

    for (genre of genreList) {
      if (genre.includes(requestedGenre) && movie.genre.includes(genre)) {
        console.log(movie)
          / movieList.push(movie)

      }
    }

  })


  response.status(200).send(movieList)
}


module.exports = { home, getAll, getById, getByTitle, getByGenre }



