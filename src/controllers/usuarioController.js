const model = require("../models/usuarioModel");

function register(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (email == undefined) {
        res.status(400).send("O email não foi definido");
    } else if (password == undefined) {
        res.status(400).send("A senha não foi definida");
    } else {
        model.register (email, password)
            .then(
                (result) => {
                    res.json(result);
                }
            ).catch(
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
                if (result) {
                    res.json(result);
                } else {
                    res.status(403).send("Email e/ou senha inválidos");
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

module.exports = {register, enterBox};