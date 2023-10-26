const express = require("express");

const app = express();

app.listen(8080);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/paginaTeste", function(req, res){
    res.sendFile(__dirname + "/public/html/paginaTeste.html")
})