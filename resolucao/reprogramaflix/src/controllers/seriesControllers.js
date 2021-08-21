const series = require("../models/series.json")

const home = (request, response) => {
    response.status(200).send(
        {
            "message": "Olá pessoa, seja bem vinda ao {reprograma}flix <3 <3 <3"
        }
    )
};

const getAll = (request, response) => {
    response.status(200).send(series);
};

const getById = (request, response) => {
    const requestedId = request.params.id;

    const filteredId = series.find(serie => serie.id == requestedId);

    response.status(200).send(filteredId);
}

const getByTitle = (request, response) => {
    const requestedTitle = request.query.title

    const filteredTitle = series.find(serie => serie.title.includes(requestedTitle))

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
    let serieList = [];

    series.forEach(serie => {
        if (serie.genre.includes(requestedGenre)) {
            return serieList.push(serie)
        }
    })

    response.status(200).send(serieList)
};

module.exports = {
    home,
    getAll,
    getById,
    getByTitle,
    getByGenre
}

