const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const usuarioController = require("../controllers/usuarioController")

router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.render("cadastro");
})

router.post("/cadastrar", (req, res) => {
    usuarioController.register(req, res);
})

router.post("/deleteUser", (req, res) => {
    usuarioController.deleteUser(req, res);
})

module.exports = router;