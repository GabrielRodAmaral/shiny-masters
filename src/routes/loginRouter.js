const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const usuarioController = require("../controllers/usuarioController");

router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/enter", (req, res) => {
    usuarioController.enterBox(req, res);
})

router.post("/getPoke", (req, res) => {
    usuarioController.getPokes(req, res);
})

module.exports = router;