const database = require("../database/db");

function register() {
    let sqlCommand = `
    INSERT INTO shinyBox () VALUES ();
    `;

    console.log("Executando o comando SQL: " + sqlCommand);

    return new Promise((resolve, reject) => {
    database.query(sqlCommand, (error, result) => {
        if (error) {
            console.error("Erro ao cadastrar:", error);
            reject(error);
        } else {
            console.log("Registro inserido com sucesso.");
            resolve(result);
        }
    });
});
}

function register2(email, password, idCreated) {
    let sqlCommand = `
    INSERT INTO treinador (email, senha, fkShinyBox) VALUES (?, ?, ?);
    `;

    console.log("Executando o comando SQL: " + sqlCommand);
    
    return new Promise((resolve, reject) => {
        database.query(sqlCommand, [email, password, idCreated], (error, result2) => {
            if (error) {
                console.error("Erro ao cadastrar:", error);
                reject(error);
            } else {
                console.log("Registro inserido com sucesso.");
                resolve(result2);
            }
        });
    });
}

function enterBox(email, password) {
    let sqlCommand = `
    SELECT idTreinador, email, senha, fkShinyBox FROM treinador WHERE email = '${email}' AND senha = '${password}'
    `;

    return new Promise((resolve, reject) => {
        database.query(sqlCommand, (error, result) => {
            if (error) {
                console.error("Erro ao consultar dados:", error);
                reject(error);
            } else {
                if (result.length > 0) {
                    console.log("Login bem-sucedido");
                    resolve(result);
                } else {
                    console.log(result.length)
                    console.log("Login falhou");
                    resolve(null);
            }
            }
        });
    });
}

function getPokes(fkBox) {
    let sqlCommand = `
    SELECT pokemon.idPokemon FROM pokemon JOIN captura ON pokemon.id=captura.fkPokemon WHERE captura.fkShinyBox = ${fkBox}
    `;

    return new Promise((resolve, reject) => {
        database.query(sqlCommand, (error, result) => {
            if (error) {
                console.error("Erro ao consultar dados:", error);
                reject(error);
            } else {
                if (result.length > 0) {
                    console.log("Pokémon encontrados");
                    resolve(result);
                } else {
                    console.log(result.length)
                    console.log("Nenhum Pokémon encontrado");
                    resolve(result);
            }
            }
        });
    });
}

module.exports = { register, enterBox, register2, getPokes};