const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("loginNaoEncontrado");
});

module.exports = router;