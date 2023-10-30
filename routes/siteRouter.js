const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/site", function(req, res){
    res.sendFile(path.join(__dirname, "..", "public", "html", "site.html"));
});

module.exports = router;