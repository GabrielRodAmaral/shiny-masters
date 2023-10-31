const express = require("express");
const router = express.Router();

router.get("/site", function(req, res){
    res.render("site");
});

module.exports = router;