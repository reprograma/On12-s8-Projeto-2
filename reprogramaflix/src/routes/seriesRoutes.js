
const controller = require('../controllers/seriesControllers')
const express = require("express");

const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);


module.exports = router;