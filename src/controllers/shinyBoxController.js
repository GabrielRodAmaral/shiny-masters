const model = require("../models/shinyBoxModel");

function registerPoke(req, res) {
    let pokeId = req.body.pokeId;
    let pokeName = req.body.pokeName;
    let pokeSprite = req.body.pokeSprite;
    let fkRegion = req.body.fkRegion;
    let idShinyBox = req.body.idShinyBox;

    if (pokeId == undefined) {
        res.status(400).send("O pokeId não foi definido");
    } else if (pokeName == undefined) {
        res.status(400).send("O pokeName não foi definido");
    } else if (pokeSprite == undefined) {
        res.status(400).send("O pokeSprite não foi definido");
    } else if (fkRegion == undefined) {
        res.status(400).send("O fkRegion não foi definido");
    } else {
        model.registerPoke (pokeId, pokeName, pokeSprite, fkRegion, idShinyBox)
            .then(
                (result) => {
                    let idCreated = result.insertId
                    res.json(result);
                    model.registerPoke2(idShinyBox, idCreated)
                }).catch(
                (error) => {
                    console.log(error);
                    console.log("Erro ao cadastrar Pokemon", error.sqlMessage);
                    res.status(500).json(error.sqlMessage);
                }
            );
            
    }
}

module.exports = {registerPoke}