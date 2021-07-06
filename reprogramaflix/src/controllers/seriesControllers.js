const app = require("../app")
const seriados = require("../models/series.json")

//definir uma rota padrão
const home = (request, response) => {
  response.status(200).send(
    {
      "message": "Olá pessoa, seja bem vindo ao {REPROGRAMA}flix!!! Venha curtir um seriado <3 <3" 
    }
  )
}

const getAll = (request, response) =>{
  response.status(200).send(series);
}
const getById = (request, response) =>{
  const requestedId = request.params.id;
  const filteredId = series.find(serie => serie.id == requestedId);
  response.status(200).send(filteredId);
}
const getByTitle = (request, response) =>{
  const requestedTitle = request.query.title.toLowerCase();
  
  const filteredTitle = series.find(serie => serie.title.toLowerCase().includes(requestedTitle));
  if (filteredTitle === "" || filteredTitle === undefined){
      response.status(404).send({"mensagem": "Busca não encontrada. Insira um título válido."})
  }else{
      response.status(200).send(filteredTitle);
  }
}
const getByGenre = (request, response) =>{
  const requestedGenre = request.query.genre.toLowerCase();
  const filteredGenre = series.filter(serie => {
    const filtro =  serie.genre.find(genre => genre.toLowerCase().includes(requestedGenre))

    if(filtro != null){
        return serie
    }
  });
  if (filteredGenre.length == 0){
      response.status(404).send({"mensagem": "Busca não encontrada. Insira um gênero válido."})
  }else{
      response.status(200).send(filteredGenre);
  }
}

module.exports = {home, getAll, getById, getByTitle, getByGenre}