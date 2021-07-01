
const movies = require("../models/filmes.json"); //../para sair da pasta atual e entrar na outra pasta


const home = (request, response) => {
    response.status(200).send({
        "mensagem": "Seja bem vinda a sessão Filmes do {reprograma}flix 🎞🍟"
    })
}
// getAll para trazer todos os filmes
const getAll = (request, response) => {
    response.status(200).send(movies);
}

const getById = (request, response) =>{
    const requestedId = request.params.id;
    const filteredId = movies.find(movie => movie.id == requestedId);
    response.status(200).send(filteredId);
}

const getByTitle = (request,response) =>{
    const requestedTitle = request.query.title.toLowerCase();
    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle));
    if (filteredTitle === "" || filteredTitle === undefined){
        response.status(404).send({"mensagem": "Busca não encontrada. Insira um título válido."})
    } else{
        response.status(200).send(filteredTitle);
    }
}
const getByGenre = (request, response) =>{
    const requestedGenre = request.query.genre.toLowerCase();
    const filteredGenre = movies.filter(movie => movie.genre.toLowerCase().includes(requestedGenre))
    
    if (filteredGenre === "" || filteredGenre === undefined){
        response.status(404).send({"mensagem": "Busca não encontrada. Insira um gênero válido."})
    }else{
        response.status(200).send(filteredGenre);
    }
    
}

module.exports = {home, getAll, getById, getByTitle, getByGenre}

