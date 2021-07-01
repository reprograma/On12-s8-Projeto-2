//responsável por definir a porta que o servidor local irá rodar.
const app = require("./src/app.js")


app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!");
})