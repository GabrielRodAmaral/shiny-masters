const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const shinyBoxController = require("../controllers/shinyBoxController");

router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.render("perfil");
})

router.get("/box", (req, res) => {
    res.render("shinyBox");
})

router.get("/insignias", (req, res) => {
    res.render("insignias");
})

router.post("/registerPoke", (req, res) => {
    shinyBoxController.registerPoke(req, res);
})

router.post("/countAllPokemon", (req, res) => {
    shinyBoxController.countAllPokemon(req, res);
})

module.exports = router;