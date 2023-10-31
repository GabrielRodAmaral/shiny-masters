const express = require("express");
const router = express.Router();

router.get("/cadastro", function(req, res){
    res.render("cadastro");
})

module.exports = router;