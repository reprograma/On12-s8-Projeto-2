const controller = require("../controllers/serieController");//importei o arquivo de controller

const express = require("express");

const router = express.Router();

router.get("/", controller.pgInicial);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);


module.exports = router 