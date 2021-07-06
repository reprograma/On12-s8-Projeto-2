const app = require("../app")
const movies = require("../models/filmes.json")
//arquivo json dos filmes (são meus dados)

//definir uma rota padrão
const home = (request, response) => {
  response.status(200).send(
    {
      "message": "Olá pessoa, seja bem vindo ao {REPROGRAMA}flix!!! <3 <3" 
    }
  )
}

const getAll = (request, response) => {
  response.status(200).send(movies);
};

const getById = (request, response) => {
  const requestedId = request.params.id;

  const filteredId = movies.find(movie => movie.id == requestedId);
  response.status(200).send(filteredId);
}
const getByTitle = (request, response) => {
  //acessando titulo solicitado na request
    const requestedTitle = request.query.title.toLowerCase();

    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle))
  if (filteredTitle === "" || filteredTitle === undefined){
    response.status(404).send({
      "message": "Por favor, insira um titulo válido."
    })
  }else{
    //enviar uma resposta para requisição
    response.status(200).send(filteredTitle);
}
}
module.exports = {home, getAll, getById}