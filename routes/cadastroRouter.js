const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/cadastro", function(req, res){
    res.sendFile(path.join(__dirname, "..", "public", "html", "cadastro.html"));
})

module.exports = router;