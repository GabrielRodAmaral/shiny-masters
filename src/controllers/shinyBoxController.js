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

function countAllPokemon(req, res) {
    let shinyBox = req.body.shinyBox;

    if (shinyBox == undefined) {
        res.status(400).send("O id da shiny box não foi definido");
    } else {
        model.countAllPokemon (shinyBox)
        .then((result) => {
            console.log("Contagem com sucesso (controller)")
            res.json({
                totalPokemon: result[0][0].totalPokemon,
                totalRegiao1: result[0][0].totalRegiao1,
                totalRegiao2: result[0][0].totalRegiao2,
                totalRegiao3: result[0][0].totalRegiao3,
                totalRegiao4: result[0][0].totalRegiao4,
                totalRegiao5: result[0][0].totalRegiao5,
                totalRegiao6: result[0][0].totalRegiao6,
                totalRegiao7: result[0][0].totalRegiao7
            });
        }) .catch((error) => {
            console.log(error);
            console.log("Erro ao contar os Pokémon ", error.sqlMessage);
            res.status(500).json(error.sqlMessage);
        })
    }
}

module.exports = {registerPoke, countAllPokemon}