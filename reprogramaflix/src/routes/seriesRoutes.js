
const controller = require("../controllers/seriesControllers.js");

const express = require("express");

const router = express.Router()

router.get("/", controller.home);
router.get("/titulo", controller.getByTitle);
router.get("/:id", controller.getById);

module.exports = router