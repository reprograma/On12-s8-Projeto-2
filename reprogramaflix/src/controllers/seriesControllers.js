
const series = require("../models/series.json");

// definindo rota padrão
const home = (request, response)  => {
    response.status(200).send(
        {
            "Mensagem":" Olá pessoal sejam bem vindos ao reprograma"
        }
    )
};
   const getById = (request, response) => {
    const requestId = request.params.id;
    
    const  filterId = series.find(serie => serie.id == requestId);
        response.status(200).send(filterId);
    }
    





const getByTitle = (request, response) => {
    const requestTitle = request.query.title.toLowerCase()
    
    const filterTitle = series.find(serie => serie.title.toLowerCase().includes(requestTitle))

   //console.log(filterTitle);
    

    if(filterTitle === "" || filterTitle === undefined){
        response.status(404).send({
           "mensagem":"Por favor , insira um título válido."
        })
    
     } else {
          response.status(200).send(filterTitle)   
        }
       
    
    

};
module.exports = {

    home,
    getById,
    getByTitle,
    

}