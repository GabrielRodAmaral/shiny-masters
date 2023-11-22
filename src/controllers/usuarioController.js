const model = require("../models/usuarioModel");

function register(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (email == undefined) {
        res.status(400).send("O email não foi definido");
    } else if (password == undefined) {
        res.status(400).send("A senha não foi definida");
    } else {
        model.register ()
            .then(
                (result) => {
                    let idCreated = result.insertId;
                    res.json(result);
                    model.register2(email, password, idCreated);
                }
            )
            .then((result2) => {
                console.log(result2)
            }).catch(
                (error) => {
                    console.log(error);
                    console.log("Erro ao cadastrar ", error.sqlMessage);
                    res.status(500).json(error.sqlMessage);
                }
            );
            
    }
}

function enterBox(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (email == undefined) {
        res.status(400).send("O email não foi definido");
    } else if (password == undefined) {
        res.status(400).send("A senha não foi definida");
    } else {
        model.enterBox (email, password)
        .then(
            (result) => {
                if (result.length>0) {
                    res.json({
                        id: result[0].idTreinador,
                        email: result[0].email,
                        fkShinyBox: result[0].fkShinyBox,
                        imgPerfil: result[0].imgPerfil
                    });
                } else {
                    res.status(400).send("Email e/ou senha inválidos");
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                console.log("Erro ", error.sqlMessage);
                res.status(500).json(error.sqlMessage);
            }
        );
    }
}

function getPokes(req, res) {
    let fkBox = req.body.fkBox;

    if (fkBox == undefined) {
        res.status(400).send("fkBox não foi definida");
    } else {
        model.getPokes(fkBox)
        .then((result) => {
            if (result) {
                const pokemon = result.map(pokemon => ({
                    idPokemon: pokemon.idPokemon,
                    sprite: pokemon.sprite
                }));
                res.json({
                    pokemon: pokemon
                })
            } else {
                res.status(403).send("Pokemons não encontrados")
            }
        }) .catch((error) => {
            console.log(error);
            console.log("Erro: ", error.sqlMessage);
            res.status(500).json(error.sqlMessage);
        })
    }
}

function deleteUser(req, res) {
    let fkBox = req.body.shinyBox;

    if (fkBox == undefined) {
        res.status(400).send("O id da shiny box não foi definido");
    } else {
        model.deleteUser (fkBox)
        .then((result) => {
            console.log("Usuario deletado com sucesso (controller)")
            res.status(200).send("Usuario deletado com sucesso");
        }) .catch((error) => {
            console.log(error);
            console.log("Erro ao deletar o usuario ", error.sqlMessage);
            res.status(500).json(error.sqlMessage);
        })
    }
}

function verifyUser(req, res) {
    let email = req.body.email;

    if (email == undefined) {
        res.status(400).send("O email não foi definido");
    } else {
        model.verifyUser (email)
        .then(
            (result) => {
                if (result.length>0) {
                    res.status(400).send("Já existe um usuário com o email (controller)");
                } else {
                    res.status(200).send("Usuário pode ser cadastrado (controller)");
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                console.log("Erro ", error.sqlMessage);
                res.status(500).json(error.sqlMessage);
            }
        );
    }
}

module.exports = {register, enterBox, getPokes, deleteUser, verifyUser};