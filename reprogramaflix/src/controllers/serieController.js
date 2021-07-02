
const series = require("../models/series.json")

const pgInicial = (request, response) => {
    response.status(200).send(
        {
             "mensagem":"Mais um projeto de Rivania" 
        }
   ) 
}

const getAll = (request, response) => {
    response.status(200).send(series)

};

const getById = (request, response) => {
    const buscarId = request.params.id;

    const filterId = series.find(serie => serie.id == buscarId);
    response.status(200).send(filterId);
}
const getByTitle = (request, response) => {
      const buscarTitle = request.query.title.toLowerCase()

      const filtrarTitle = series.find(serie => serie.title.toLowerCase().includes(buscarTitle))
            console.log(filtrarTitle)

            if (buscarTitle === "" || filtrarTitle === undefined) {
                response.status(404).send({
                    "messagem": "precisa  inserir um título válido."
                })
            } else {
                response.status(200).send(filtrarTitle)
            }
        };
        
        
        const getByGenre = (request, response) => {
            
            const buscarpGenre = request.query.genre;
            let serieList = [];

        
    series.forEach(serie => {
      let genreList = serie.genre;
        

        for (genre of genreList) {
            if (genre.includes(buscarpGenre) ) {
               // console.log(serie)
                serieList.push(serie)
            }
        

        }
    })   
    // retornar a resposta
    response.status(200).send(serieList)
}
        

        module.exports =  { pgInicial, getAll, getById, getByTitle, getByGenre }




