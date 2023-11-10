const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("perfil");
})

router.get("/box", (req, res) => {
    res.render("shinyBox");
})

router.get("/insignias", (req, res) => {
    res.render("insignias");
})

module.exports = router;